import React from "react";
import LoginRegisterForm from "../../components/login-register-form";
import useLoginPage from "./hooks/use-login-page";

const LoginPage: React.FC = () => {
  const { loading, setPassword, setUsername, handleLogin } = useLoginPage();
  return (
    <div data-testid="login-form" className="box-border h-1/3 w-1/2 lg:w-1/4 bg-white shadow-lg p-10 text-lg">
      <LoginRegisterForm
        inputClassName="h-16 w-full text-lg"
        loadingMessage={loading}
        isLogin={true}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
