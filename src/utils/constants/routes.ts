export enum UnAuthRoutes {
  Login = "/login",
  Register = "/register",
  Reverify = "/reverify",
  NotFound = "/404",
  Landing = "/",
  PrivacyPolicy = "/policy",
}

export enum AuthRoutes {
  Explore = "/explore",
  Favourites = "/favourites",
  Archive = "/archive",
  SingleUser = "/talent/:talentId",
  Chat = "/chat",
  ChatWithId = "/chat/:conversationId",
  Settings = "/settings",
  SettingsWithPath = "/settings/:subPath",
  Logout = "/logout",
  NotFound = "/404",
}
