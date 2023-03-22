import { useLazyQuery } from "@apollo/client";
import { SendEmailQuery, SendEmailQueryVariables } from "API";

import { sendEmail } from "graphql/queries";
import { UseSendEmailProps } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const useSendEmail = (): UseSendEmailProps => {
  const [sendEmailData, { data, loading, error }] = useLazyQuery<
    SendEmailQuery,
    SendEmailQueryVariables
  >(getQuery(sendEmail));
  return { loading, sendEmailData, data, error };
};
