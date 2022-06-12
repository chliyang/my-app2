import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form/login-register-form";
import http from "../../../utils/http/request";
import { authenticatedSuccess } from "../../../utils/session";

const useLoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
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
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        e.response && e.response.status === 400
          ? setErrorMessage(e.response.data.message)
          : setErrorMessage(e.message);
      });
  };

  return {
    isLoading,
    isError,
    errorMessage,
    handleLogin
  };
};

export default useLoginPage;
