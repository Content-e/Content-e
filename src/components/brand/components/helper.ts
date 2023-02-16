import { CreateBrandProfileInput } from "API";

export const isNameSuggestionDisable = (
  data: CreateBrandProfileInput
): boolean => !data.description || !data.toneVoice;

export const isPillarSuggestionDisable = (
  data: CreateBrandProfileInput
): boolean => isNameSuggestionDisable(data) || !data.name;

export const isMissionSuggestionDisable = (
  data: CreateBrandProfileInput
): boolean => isPillarSuggestionDisable(data) || !data.pillars;

export const isTaglineSuggestionDisable = (
  data: CreateBrandProfileInput
): boolean => isMissionSuggestionDisable(data) || !data.internalMission;
