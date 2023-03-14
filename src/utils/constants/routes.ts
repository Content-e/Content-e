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
  CampaignBrief = "/campaignBrief",
  Wallet = "/wallet",
  BestPractices = "/bestPractices",

  BrandDashboard = "/brandDashboard",
  BrandBriefs = "/brandBriefs",
  Creatives = "/creatives",
  CreateBrief = "/createBrief",
  Brand = "/brandProfile",
  EditBrand = "/brandEdit",
}
