export enum UnAuthRoutes {
  ClerkRedirect = '/redirect',
  Landing = '/landing',
  SubLanding = '/landing/:id',

  Creators = '/forCreators',
  Brands = '/forBrands',
  SayHello = '/sayHello',
  HomePageLogin = '/homePageLogin',

  Login = '/login',
  SubLogin = '/login/:id',
  AdminLogin = '/adminLogin',

  Register = '/register',
  SubRegister = '/register/:id',

  Reverify = '/reverify',
  SubReverify = '/reverify/:id',

  ForgetPassword = '/forgetPassword',
  SubForgetPassword = '/forgetPassword/:id',

  ResetPassword = '/resetPassword',
  SubResetPassword = '/resetPassword/:id',

  PrivacyPolicy = '/privacyPolicy',
}

export enum AuthRoutes {
  Logout = '/logout',
  Tiktok = '/linkTikTok/:id',
  Redirector = '/redirecting/:id?',

  Dashboard = '/dashboard',
  CampaignBrief = '/campaignBriefs',
  EditProfile = '/editProfile',
  BestPractices = '/bestPractices',
}

export enum AdminRoutes {
  Brands = '/brands',
  Creators = '/creators',
  CreatePractice = '/createPractice',
  EditPractice = '/editPractice',
  AccountCreator = '/user-management',
}

export enum CreatorRoutes {
  Wallet = '/wallet',
}

export enum BrandRoutes {
  Creatives = '/creatives',
  CreateBrief = '/createBrief',
  EditBrief = '/editBrief',
  Brand = '/brandProfile',
  EditBrand = '/brandEdit',
  LinkTiktokAccount = '/branddashboard',
}
