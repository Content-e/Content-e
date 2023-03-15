export enum UnAuthRoutes {
  Landing = "/landing",
  SubLanding = "/landing/:id",

  Login = "/login",
  SubLogin = "/login/:id",

  Register = "/register",
  SubRegister = "/register/:id",

  Reverify = "/reverify",
  SubReverify = "/reverify/:id",

  ForgetPassword = "/forgetPassword",
  SubForgetPassword = "/forgetPassword/:id",

  ResetPassword = "/resetPassword",
  SubResetPassword = "/resetPassword/:id",
}

export enum AuthRoutes {
  Logout = "/logout",
  Tiktok = "/linkTikTok/:id",
  Redirector = "/redirecting/:id?",

  CreatorProfile = "/creatorProfile",
  CreatorDashboard = "/creatorDashboard",
  CampaignBrief = "/campaignBriefs",
  Wallet = "/wallet",
  BestPractices = "/bestPractices",

  Brand = "/brandProfile",
  EditBrand = "/brandEdit",
  BrandDashboard = "/brandDashboard",
  BrandBriefs = "/brandBriefs",
  CreateBrief = "/createBrief",
  Creatives = "/creatives",
}
