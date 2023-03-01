export enum UnAuthRoutes {
  Login = "/login",
  Register = "/register",
  Reverify = "/reverify",
  ForgetPassword = "/forgetPassword",
  ResetPassword = "/resetPassword",
  SubLanding = "/:id/",
  SubLogin = "/:id/signin",
  SubReverify = "/:id/verify",
  SubRegister = "/:id/signup",
  SubForgetPass = "/:id/forgetPass",
  SubResetPass = "/:id/restPass",
}

export enum AuthRoutes {
  Home = "/dashboard",
  Brand = "/brand",
  EditBrand = "/brandEdit",
  Logout = "/logout",
}
