import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ISubmitData } from "../../../components/login-register-form";
import http from "../../../utils/http/request";

const useRegisterPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEmailVerifyStep, setIsEmailVerifyStep] = useState<boolean>(true);
  const [verifyResultMessage, setVerifyResultMessage] = useState<string>("");
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
        setVerifyResultMessage(res.msg);
        setIsLoading(false);
        setTimeout(() => {
          setIsEmailVerifyStep(false);
        }, 3000);
      })
      .catch(() => {
        setVerifyResultMessage("验证失败，请稍后重试");
        setIsError(true);
      });
  };
  return {
    isLoading,
    isError,
    handleRegister,
    verifyResultMessage,
    isEmailVerifyStep,
    handleEmailVerify
  };
};

export default useRegisterPage;
