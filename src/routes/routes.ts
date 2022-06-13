import { isAuthenticated } from "./../utils/session";
import LoginPage from "../pages/login-page/login-page";
import RegisterPage from "../pages/register-page/register-page";
import HomePage from "../pages/home-page/home-page";

interface IRouteType {
  path: string;
  component: any;
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
  }
];
