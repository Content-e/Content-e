export enum UnAuthRoutes {
  Landing = "/landing",
  SubLanding = "/landing/:id",

  Creators = "/creators",
  Brands = "/brands",
  SayHello = "/sayHello",
  HomePageLogin = "/homePageLogin",

  Login = "/login",
  SubLogin = "/login/:id",
  AdminLogin = "/adminLogin",

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
  CampaignBrief = "/campaignBriefs",
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
  EditBrief = "/editBrief",
  Brand = "/brandProfile",
  EditBrand = "/brandEdit",
}
