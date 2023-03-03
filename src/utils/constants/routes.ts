export enum UnAuthRoutes {
  Landing = "/landing/:id",

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
  CreatorDashboard = "/creatorDashboard",
}
