import Modal from 'components/authentication/modal';
import Button from 'components/ui/button';
import Input from 'components/ui/input';
import Label from 'components/ui/label';
import Select from 'components/ui/select';
import Switch from 'components/ui/switch';
import TextArea from 'components/ui/textArea';
import useZodForm from 'hooks/useZodForm';
import _ from 'lodash';
import { useContext, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SaveBriefProps } from 'state/brandBrief';
import withSaveBrief from 'state/brandBrief/withSaveBriefHoc';
import { AuthRoutes } from 'utils';
import { z } from 'zod';
import init from 'zod-empty';
import { ProfileContext } from '../../state/profileSteps';

const schema = z.object({
  id: z.string().optional(),
  BriefName: z.string().nonempty(), // TODO: wtf is this name, should be renamed to 'name'
  // tiktokHandle: z.string().nonempty(),
  // vertical: z.string().nonempty(),
  objective: z.string().nonempty(),
  brandBriefDetails: z.string().nonempty(), // TODO: rename -> details
  creativeInspirations: z
    .string()
    .url()
    .startsWith('https://www.tiktok.com')
    .includes('/video/')
    .or(z.literal(''))
    .array(),
  active: z.boolean(),
  campaignId: z.string().nonempty(),
  adgroupId: z.string().nonempty(),
  tiktokAdvertiserId: z.string().optional(),
});

const defaultValues = {
  ...init(schema),
  active: true,
};

function BriefForm({
  getAdGroups,
  listAdGroups,
  dataLoading,
  listCampaigns,
  saveData,
  loading,
  response,
  briefState,
}: SaveBriefProps) {
  const history = useHistory();
  const { profileState } = useContext(ProfileContext);

  const {
    register,
    watch,
    control,
    handleSubmit,
    reset,
    setError,
    resetField,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useZodForm({
    schema,
    defaultValues,
    mode: 'all',
  });

  // This is a workaround bad route architecture
  // briefState is undefined on mount, so we must reset form once it loads from history API
  useEffect(() => {
    if (briefState) {
      reset({
        ...briefState,
      });
    }
  }, [briefState, reset]);

  const campaignOptions = useMemo(
    () =>
      listCampaigns.map((item) => ({
        text: item.value,
        value: item.id,
      })),
    [listCampaigns]
  );

  const adGroupOptions = useMemo(
    () =>
      listAdGroups.map((item) => ({
        text: item.value,
        value: item.id,
      })),
    [listAdGroups]
  );

  const selectedCampaign = watch('campaignId');

  useEffect(() => {
    if (selectedCampaign) getAdGroups(selectedCampaign);
  }, [selectedCampaign]); // Adding getAdGroups as dependency causes a loop due to a effect hell in HOCs

  useEffect(() => {
    if (selectedCampaign && !listAdGroups.length && !dataLoading) {
      setError('adgroupId', {
        message:
          'No Ad Groups found in the campaign. Please configure it in TikTok',
      });
    } else {
      resetField('adgroupId');
    }
  }, [listAdGroups, resetField, setError, dataLoading]); // selectedCampaign is used in a different effect

  const onSubmit = handleSubmit(async (data) => {
    const dataToReq = {
      creativeInspirations: data.creativeInspirations.filter(_.isString),
      vertical: '', //'TODO',
      tiktokHandle: '', //'TODO',
    };
    if (profileState.data?.tiktokAccountAccess?.advertiser_id) {
      dataToReq['tiktokAdvertiserId'] =
        profileState.data?.tiktokAccountAccess.advertiser_id;
    }
    await saveData({
      ...data,
      ...dataToReq,
    });
  });

  return (
    <section className="paper">
      <h1 className="text-primary text-2xl font-bold">
        {briefState ? 'Edit' : 'Create'} Brief
      </h1>
      <form onSubmit={onSubmit}>
        <div className="grid xl:grid-cols-3 p-6 xl:gap-8">
          <div className="xl:col-span-2 col-span-3">
            <Input
              required
              placeholder="Give your brief a name"
              name="BriefName"
              label="Brief Name"
              register={register}
              errors={errors}
            />
            <Select
              required
              name="campaignId"
              label="Select TikTok campaign to link to"
              placeholder="Select an option"
              options={campaignOptions}
              control={control}
              errors={errors}
            />
            <Select
              required
              name="adgroupId"
              label="Ad group"
              placeholder={
                selectedCampaign ? 'Select an option' : 'Select campaign first'
              }
              disabled={!adGroupOptions.length}
              isLoading={dataLoading}
              options={adGroupOptions}
              control={control}
              errors={errors}
            />
            <Input
              required
              name="objective"
              register={register}
              errors={errors}
            />
            <Switch name="active" control={control} required />
          </div>
          <div className="xl:col-span-1 col-span-3 bg-[#f9fbfd] border-[#005F730D] border-[1px] p-4 rounded-lg">
            <Label name="Creative inspiration" />
            {_.times(4).map((index) => (
              <Input
                key={index}
                name={`creativeInspirations.${index}`}
                className="mt-12"
                placeholder="https://www.tiktok.com/@user/video/id"
                inputClassName="bg-white"
                label=""
                register={register}
                errors={errors}
              />
            ))}
          </div>
        </div>
        <TextArea
          required
          className="pb-6 px-6"
          rows={9}
          name="brandBriefDetails"
          label="Brief details"
          placeholder="Decsribe your brief in more detail..."
          register={register}
          errors={errors}
        />
        <div className="xl:hidden w-full px-6 pb-6"></div>
        <div
          className="
          flex sm:flex-row w-full sm:justify-center
          font-sans text-base text-white font-bold flex-col-reverse gap-4 items-center px-6"
        >
          <Link to={AuthRoutes.CampaignBrief}>
            <Button type="reset" variant="secondary">
              CANCEL
            </Button>
          </Link>
          <Button
            type="submit"
            disabled={!isValid || !isDirty || isSubmitting}
            isLoading={isSubmitting}
          >
            SAVE BRIEF
          </Button>
        </div>
      </form>
      <Modal
        content="Great, your brief has been saved!"
        isOpen={!!response && !loading}
        type="brand"
        handleClose={() => history.push(AuthRoutes.CampaignBrief)}
        actionLabel="BACK TO CAMPAIGN BRIEFS"
        actionHandler={() => history.push(AuthRoutes.CampaignBrief)}
      />
    </section>
  );
}

export default withSaveBrief(BriefForm);
