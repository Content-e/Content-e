import { FC, useEffect, useState } from "react";
import { CreateBrandProfileInput, GPT_PROMPT } from "API";
import CustomModal from "./modal";
import { useGetSuggestions } from "hooks";
import { getSuggestions } from "components";

interface Props {
  data: CreateBrandProfileInput;
  prompType: GPT_PROMPT;
  title: string;
  onCancel: () => void;
  onInsertion: (text: string) => void;
}
export const Modal: FC<Props> = ({ data, prompType, ...rest }) => {
  const [responseNames, setResponseNames] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);

  const { getSuggestions: getSuggestionsApi, suggestions } =
    useGetSuggestions();

  const refreshResponse = (): void => {
    setLoading(true);
    getSuggestionsApi({
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
    if (loading && suggestions) {
      setLoading(false);
      const suggestionRes = getSuggestions(prompType, suggestions);
      setResponseNames(suggestionRes || []);
    }
  }, [loading, suggestions]);

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
