import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form/login-register-form";
import http from "../../../utils/http/request";
import { authenticatedSuccess } from "../../../utils/session";

const useLoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const history = useHistory();

  const handleLogin = (data: ISubmitData) => {
    setIsLoading(true);
    http("post", "/users/token", {}, data)
      .then((res) => {
        const data = res.data;
        authenticatedSuccess(data.token);
        setIsLoading(false);
      })
      .then(() => {
        history.push("/home");
        // TODO: 应当自动刷新
        window.location.reload();
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return {
    isLoading,
    isError,
    handleLogin
  };
};

export default useLoginPage;
