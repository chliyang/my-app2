import React from "react";
import { isAuthenticated } from "./../utils/session";
import LoginPage from "../pages/login-page/login-page";
import RegisterPage from "../pages/register-page/register-page";
import HomePage from "../pages/home-page/home-page";
import ProductDetail from "../pages/home-page/components/product-detail/detail-page";

interface IRouteType {
  path: string;
  component: React.ReactNode;
  isAuthenticated: boolean;
  rolesId: Array<number>;
}
export const routes: Array<IRouteType> = [
  {
    path: "/login",
    component: LoginPage,
    isAuthenticated: true,
    rolesId: [0, 1, 2]
  },
  {
    path: "/register",
    component: RegisterPage,
    isAuthenticated: true,
    rolesId: [0, 1, 2]
  },
  {
    path: "/home",
    component: HomePage,
    isAuthenticated: isAuthenticated(),
    rolesId: [0, 1, 2]
  },
  {
    path: "/sell",
    component: HomePage,
    isAuthenticated: isAuthenticated(),
    rolesId: [0, 1, 2]
  },
  {
    path: "/buy",
    component: HomePage,
    isAuthenticated: isAuthenticated(),
    rolesId: [0, 1, 2]
  },
  {
    path: "/forum",
    component: HomePage,
    isAuthenticated: isAuthenticated(),
    rolesId: [0, 1, 2]
  },
  {
    path: "/about",
    component: HomePage,
    isAuthenticated: isAuthenticated(),
    rolesId: [0, 1, 2]
  },
  {
    path: "/edit",
    component: HomePage,
    isAuthenticated: isAuthenticated(),
    rolesId: [1, 2]
  },
  {
    path: "/delete",
    component: HomePage,
    isAuthenticated: isAuthenticated(),
    rolesId: [2]
  },
  {
    path: "/products/:id",
    component: ProductDetail,
    isAuthenticated: isAuthenticated(),
    rolesId: [0, 1, 2]
  }
];
