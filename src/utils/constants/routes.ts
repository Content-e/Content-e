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
  Home = "/dashboard",
  Brand = "/brand",
  EditBrand = "/brandEdit",
  Logout = "/logout",
  Tiktok = "/linkTikTok/:id",
  Redirector = "/redirecting/:id?",
  CreatorDashboard = "/creatorDashboard",
  CreatorProfile = "/creatorProfile",
  BrandBrief = "/brandBrief",
  CampaignBrief = "/campaignBrief",
  Wallet = "/wallet",
  BestPractices = "/bestPractices",
}
