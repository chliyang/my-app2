import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form/login-register-form";
import http from "../../../utils/http/request";

const useRegisterPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isEmailVerifyStep, setIsEmailVerifyStep] = useState<boolean>(true);
  const history = useHistory();

  const handleRegister = (data: ISubmitData) => {
    setIsLoading(true);
    http("post", "/users", {}, data)
      .then(() => {
        setIsLoading(false);
      })
      .then(() => {
        history.push("/login");
        window.location.reload();
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        e.response.status === 400
          ? setErrorMessage(e.response.data.message)
          : setErrorMessage(e.message);
      });
  };

  const handleEmailVerify = (email: string) => {
    setIsLoading(true);
    http("get", "/users/email", {}, { email })
      .then((res) => {
        setIsLoading(false);
        setIsEmailVerifyStep(false);
      })
      .catch((e) => {
        setIsError(true);
        e.response.status === 400
          ? setErrorMessage(e.response.data.message)
          : setErrorMessage(e.message);
      });
  };
  return {
    isLoading,
    isError,
    errorMessage,
    handleRegister,
    isEmailVerifyStep,
    handleEmailVerify
  };
};

export default useRegisterPage;
