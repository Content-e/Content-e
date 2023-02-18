import { FC, useEffect, useState } from "react";
import { CreateBrandProfileInput, GPT_PROMPT } from "API";
import CustomModal from "./modal";
import { useGetSuggestions } from "hooks";
import { getSuggestionInput, getSuggestions } from "components";

interface Props {
  data: CreateBrandProfileInput;
  prompType: GPT_PROMPT;
  title: string;
  onCancel: () => void;
  onInsertion: (text: string) => void;
}
export const Modal: FC<Props> = ({ data, prompType, ...rest }) => {
  const [responseNames, setResponseNames] = useState<Array<string>>([]);
  const [rawResponse, setRawResponse] = useState("");
  const [firstApiCall, setFirstApiCall] = useState(true);
  const [loading, setLoading] = useState(false);

  const { getSuggestions: getSuggestionsApi, suggestions } =
    useGetSuggestions();

  const refreshResponse = (): void => {
    setLoading(true);
    getSuggestionsApi({
      variables: {
        data: getSuggestionInput(prompType, data, firstApiCall, rawResponse),
      },
    });
  };

  useEffect(() => {
    if (loading && suggestions) {
      setLoading(false);
      setFirstApiCall(false);
      const rawData = suggestions?.[prompType];
      const suggestionRes = getSuggestions(prompType, rawData);
      setRawResponse(rawData);
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
