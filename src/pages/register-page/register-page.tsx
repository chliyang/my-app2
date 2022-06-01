import React from "react";
import LoginRegisterForm from "../../components/login-register-form";
import useRegisterPage from "./hooks/use-register-page";

const RegisterPage: React.FC = () => {
  const {
    loading,
    handleRegister
  } = useRegisterPage();
  return (
    <div data-testid="register-form" className="box-border min-w-max h-1/2 w-1/2 lg:w-1/4 bg-white shadow-lg p-10 text-lg">
      <LoginRegisterForm
        inputClassName="h-10"
        loadingMessage={loading}
        title="注册信息填写"
        handleSubmit={handleRegister}
      />
    </div>
  );
};

export default RegisterPage;
