import { FC, useEffect, useState } from "react";
import { withProfile } from "state/profileSteps";
import { BrandProps, IBrandFormState, withBrand } from "state/brand";
import * as S from "./styles";
import { ProfileProps } from "utils";
import BrandInput from "./brandInput";
import { IconLoader } from "components/loader";
import classNames from "classnames";

export const BrandForm: FC<ProfileProps & BrandProps> = ({
  profileState: { data },
  updateData,
  brandLoading,
  data: brandState,
}) => {
  const [formState, setFormState] = useState<IBrandFormState>({});
  const [btnDisable, setBtnDisable] = useState(true);

  const handleChange = (key: string, value: string): void => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setBtnDisable(false);
  };

  const submitForm = (): void => {
    if (!brandLoading) {
      const brand = data?.brand?.items?.[0] || {};
      updateData({ ...brand, metaData: JSON.stringify(formState) });
    }
  };

  useEffect(() => {
    const brand = data?.brand?.items?.[0];
    if (brand?.metaData && typeof brand.metaData === "string") {
      try {
        const metadata = JSON.parse(brand.metaData) as IBrandFormState;
        setFormState(metadata);
      } catch (err) {
        setFormState({});
      }
    }
  }, [data]);

  useEffect(() => {
    if (!brandLoading && brandState) setBtnDisable(true);
  }, [brandState, brandLoading]);

  const props = { formState, onChange: handleChange };

  return (
    <S.BrandInputForm>
      <BrandInput {...props} keyProp="tiktok" title="Link Tiktok account" />
      <BrandInput {...props} keyProp="website" title="Brand website" />
      <BrandInput
        {...props}
        keyProp="instagram"
        title="Brand instagram handle"
      />
      <BrandInput {...props} keyProp="facebook" title="Brand facebook page" />
      <BrandInput {...props} keyProp="linkedin" title="Brand linkedin page" />
      <BrandInput {...props} keyProp="twitter" title="Brand Twitter handle" />

      <S.SaveButtonContainer>
        <S.SaveButton
          onClick={submitForm}
          disabled={btnDisable}
          className={classNames({
            "no-dirty-state": btnDisable,
            active: brandLoading,
          })}
        >
          <S.SaveBtnText className={classNames({ loading: brandLoading })}>
            Save
          </S.SaveBtnText>
          {brandLoading && <IconLoader />}
        </S.SaveButton>
      </S.SaveButtonContainer>
    </S.BrandInputForm>
  );
};

export default withProfile(withBrand(BrandForm));
