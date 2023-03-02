export enum UnAuthRoutes {
  Login = "/login",
  Register = "/register",
  Reverify = "/reverify",
  ForgetPassword = "/forgetPassword",
  ResetPassword = "/resetPassword",
  SubLanding = "/:id/landing",
  SubLogin = "/:id/signin",
  SubReverify = "/:id/verify",
  SubRegister = "/:id/signup",
  SubForgetPass = "/:id/forgetPass",
  SubResetPass = "/:id/resetPass",
}

export enum AuthRoutes {
  Home = "/dashboard",
  Brand = "/brand",
  EditBrand = "/brandEdit",
  Logout = "/logout",
}
