import { isAuthenticated } from './../utils/session';
import LoginPage from "../pages/login-page/login-page";
import RegisterPage from "../pages/register-page/register-page";
import HomePage from "../pages/home-page/home-page";

interface IRouteType{
  path: string,
  component:any,
  isAuthenticated: boolean
}
export const routes: Array<IRouteType> = [
  { path: "/login", component: LoginPage, isAuthenticated: true },
  { path: "/register", component: RegisterPage, isAuthenticated: true },
  { path: "/home", component: HomePage, isAuthenticated: isAuthenticated() }
];
