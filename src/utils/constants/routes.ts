export enum UnAuthRoutes {
  Landing = "/landing",
  SubLanding = "/landing/:id",

  Brands = "/brands",

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

  Dashboard = "/dashboard",
  CampaignBrief = "/campaignBrief",
  EditProfile = "/editProfile",

  AdminDashboard = "/adminDashboard",
}

export enum CreatorRoutes {
  Wallet = "/wallet",
  BestPractices = "/bestPractices",
}

export enum BrandRoutes {
  Creatives = "/creatives",
  CreateBrief = "/createBrief",
  Brand = "/brandProfile",
  EditBrand = "/brandEdit",
}
