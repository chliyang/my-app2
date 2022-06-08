import React from "react";
import EmailVerifyForm from "../../components/email-verify-form/email-verify-form";
import LoginRegisterForm from "../../components/login-register-form/login-register-form";
import useRegisterPage from "./hooks/use-register-page";

const RegisterPage: React.FC = () => {
  const {
    isError,
    isLoading,
    errorMessage,
    handleRegister,
    isEmailVerifyStep,
    handleEmailVerify
  } = useRegisterPage();
  return (
    <div data-testid="register-form" className="box-border min-w-max min-h-min w-1/2 lg:w-1/4 bg-white shadow-lg p-10 text-lg">
      {isEmailVerifyStep
        ? <EmailVerifyForm isLoading={isLoading} isError={isError} errorMessage={errorMessage} handleEmailVerify={handleEmailVerify} />
        : <LoginRegisterForm
          errorMessage={errorMessage}
          isLoading={isLoading}
          isError={isError}
          inputClassName="h-10"
          title="Registration Information"
          handleSubmit={handleRegister}
        />}
    </div>
  );
};

export default RegisterPage;
