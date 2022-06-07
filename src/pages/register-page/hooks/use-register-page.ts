import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form/login-register-form";
import http from "../../../utils/http/request";

const useRegisterPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
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
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  const handleEmailVerify = (email: string) => {
    setIsLoading(true);
    http("get", "/users/email", {}, { email })
      .then((res) => {
        setIsLoading(false);
        setIsEmailVerifyStep(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };
  return {
    isLoading,
    isError,
    handleRegister,
    isEmailVerifyStep,
    handleEmailVerify
  };
};

export default useRegisterPage;
