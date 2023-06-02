import Modal from "components/authentication/modal";
import Button from "components/ui/button";
import Input from "components/ui/input";
import Label from "components/ui/label";
import Select from "components/ui/select";
import TextArea from "components/ui/textArea";
import useZodForm from "hooks/useZodForm";
import _ from "lodash";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { SaveBriefProps } from "state/brandBrief";
import withSaveBrief from "state/brandBrief/withSaveBriefHoc";
import { AuthRoutes } from "utils";
import { z } from "zod";
import init from "zod-empty";

const schema = z.object({
  id: z.string().optional(),
  BriefName: z.string().nonempty(), // TODO: wtf is this name, should be renamed to 'name'
  // tiktokHandle: z.string().nonempty(),
  // vertical: z.string().nonempty(),
  objective: z.string().nonempty(),
  brandBriefDetails: z.string().nonempty(), // TODO: rename -> details
  creativeInspirations: z.string().url().or(z.literal("")).array(),
  active: z.boolean(),
  campaignId: z.string().nonempty(),
  adgroupId: z.string().nonempty(),
  status: z.string().nullish(),
});

const defaultValues = {
  ...init(schema),
};

function BriefForm({
  // getAdGroups, // use campaignId to fetch
  // dataLoading,
  // listCampaigns,
  saveData,
  loading,
  response,
  briefState,
}: SaveBriefProps) {
  const history = useHistory();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useZodForm({
    schema,
    defaultValues,
    mode: "all",
  });

  // This is a workaround bad route architecture
  // briefState is undefined on mount, so we must reset form once it loads from history API
  useEffect(() => {
    if (briefState) {
      reset({
        ...briefState,
      });
    }
  }, [briefState]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await saveData(
      _.omit(
        {
          ...data,
          creativeInspirations: data.creativeInspirations.filter(_.isString),
          vertical: "TODO",
          tiktokHandle: "TODO",
        },
        ["status"]
      )
    );
  });

  return (
    <section className="paper">
      <h1 className="text-primary text-2xl font-bold">
        {briefState ? "Edit" : "Create"} Brief
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
              options={[
                { text: "Fake Campaign 1", value: "fake1" },
                { text: "Fake Campaign 2", value: "fake2" },
              ]}
              control={control}
              errors={errors}
            />
            <Input
              required
              name="adgroupId"
              label="Ad group"
              register={register}
              errors={errors}
            />
            <Input
              required
              name="objective"
              register={register}
              errors={errors}
            />
            <Input
              name="status"
              placeholder="This field is not used on the backend"
              label="Brief Status"
              register={register}
              errors={errors}
            />
          </div>
          <div className="xl:col-span-1 col-span-3 bg-[#f9fbfd] border-[#005F730D] border-[1px] p-4">
            <Label name="Creative inspiration" />
            {_.times(4).map((index) => (
              <Input
                name={`creativeInspirations.${index}`}
                className="mb-14 mt-8"
                placeholder="Paste creative URL"
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
        actionLabel="BACK TO COMPAIGN BRIEFS"
        actionHandler={() => history.push(AuthRoutes.CampaignBrief)}
      />
    </section>
  );
}

export default withSaveBrief(BriefForm);
