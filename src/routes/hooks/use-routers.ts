import { useEffect, useState } from "react";
import http from "../../utils/http/request";
import { routes } from "../routes";

const useRouters = () => {
  const [rolesId, setRolesId] = useState<number[]>([]);

  useEffect(() => {
    http("GET", "/users/info")
      .then((res) => {
        setRolesId(res.data.rolesId);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const isIncluded = (routesRoles: number[], userRoles: number[]): boolean => {
    return !!routesRoles.filter((role) => userRoles.includes(role)).length;
  };
  const visitableRoutes = routes.filter((route) =>
    isIncluded(route.rolesId, rolesId)
  );
  return { visitableRoutes };
};

export default useRouters;
