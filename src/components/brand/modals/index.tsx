import { FC, useEffect, useState } from "react";
import { CreateBrandProfileInput, GPT_PROMPT } from "API";
import CustomModal from "./modal";
import { useGetSuggestions } from "hooks/query/useSuggestions";

interface Props {
  data: CreateBrandProfileInput;
  prompType: GPT_PROMPT;
  title: string;
  onCancel: () => void;
  onInsertion: (text: string) => void;
}
export const Modal: FC<Props> = ({ data, prompType, ...rest }) => {
  const [responseNames, setResponseNames] = useState<Array<string>>([]);
  const { getSuggestions, loading, suggestions, error } = useGetSuggestions();

  const refreshResponse = (): void => {
    getSuggestions({
      variables: {
        data: {
          prompType,
          businessDescription: data.description,
          toneOfVoice: data.toneVoice,
          brandName: data.name,
          brandPillars: data.pillars,
          brandMissionStatement: data.internalMission,
        },
      },
    });
  };

  useEffect(() => {
    if (!loading) {
      if (suggestions) {
        console.log(suggestions);
        setResponseNames(["first name"]);
      } else if (error) {
        setResponseNames([]);
      }
    }
  }, [loading, suggestions, error]);

  return (
    <CustomModal
      {...rest}
      responses={responseNames}
      loading={loading}
      onRefresh={refreshResponse}
    />
  );
};

export default Modal;
