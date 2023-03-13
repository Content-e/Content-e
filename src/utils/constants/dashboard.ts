/* eslint-disable max-len */
import { ICreatorDashboardBox } from "state/dashboard";

export const initialProfileState = { isLoading: false };

export const CreatorDashboardBoxes: ICreatorDashboardBox = {
  Wallet: {
    label: "Wallet",
    placement: "right",
    tooltip:
      "Your wallet is the amount you've earned. You'll earn on every ad dollar a brand puts behind your creative",
  },
  Approval: {
    label: "Approval rate",
    placement: "right",
    tooltip:
      "Approval rate equals, number of creatives submitted divided number of creatives approved",
  },
  Conversion: {
    label: "Conversion rate",
    placement: "left",
    tooltip:
      "Approval rate equals, number of creatives submitted divided number of creatives approved",
  },
  ClickThrough: {
    label: "Click through rate",
    placement: "left",
    tooltip:
      "Approval rate equals, number of creatives submitted divided number of creatives approved",
  },
};
