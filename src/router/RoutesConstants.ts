import { FC } from "react";
import { RouteProps } from "react-router-dom";
import {
  AdminRoutes,
  AuthRoutes,
  BrandRoutes,
  CreatorRoutes,
  UnAuthRoutes,
} from "utils";
import AuthRouter from "./AuthRouter";
import UnAuthRouter from "./UnAuthRouter";

export const UnAuthRoutesArray = Object.values(UnAuthRoutes) as Array<string>;
export const CreatorAuthArray = [
  ...Object.values(AuthRoutes),
  ...Object.values(CreatorRoutes),
] as Array<string>;
export const BrandAuthArray = [
  ...Object.values(AuthRoutes),
  ...Object.values(BrandRoutes),
] as Array<string>;
export const AdminAuthArray = [
  ...Object.values(AuthRoutes),
  ...Object.values(AdminRoutes),
] as Array<string>;
export const AuthRoutesArray = [
  ...Object.values(AuthRoutes),
  ...Object.values(CreatorRoutes),
  ...Object.values(BrandRoutes),
] as Array<string>;
export const AllRoutesArray = UnAuthRoutesArray.concat(AuthRoutesArray);

export const mainRoutes: RouteProps[] = [
  {
    path: AuthRoutesArray,
    exact: true,
    component: AuthRouter as FC,
  },
  {
    path: UnAuthRoutesArray,
    exact: true,
    component: UnAuthRouter as FC,
  },
];
