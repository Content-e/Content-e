import { useMutation } from "@apollo/client";
import {
  CreateBestPracticesMutation,
  CreateBestPracticesMutationVariables,
  UpdateBestPracticesMutation,
  UpdateBestPracticesMutationVariables,
} from "API";
import { createBestPractices, updateBestPractices } from "graphql/mutations";
import { ICreatePracticeResponse, IEditPracticeResponse } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const createBestPractice = (): ICreatePracticeResponse => {
  const [createBrief, { data, loading, error }] = useMutation<
    CreateBestPracticesMutation,
    CreateBestPracticesMutationVariables
  >(getQuery(createBestPractices));
  return { loading, createBrief, error, data: data?.createBestPractices };
};

export const editBestPractice = (): IEditPracticeResponse => {
  const [editBrief, { data, loading, error }] = useMutation<
    UpdateBestPracticesMutation,
    UpdateBestPracticesMutationVariables
  >(getQuery(updateBestPractices));
  return { loading, editBrief, error, data: data?.updateBestPractices };
};
