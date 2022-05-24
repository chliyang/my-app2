import React from "react";
import MyForm from "../../components/my-form";
import useLoginPage from "./hooks/use-login-page";

const LoginPage: React.FC = () => {
  const { loading, setPassword, setUsername, handleLogin } = useLoginPage();
  return (
    <div>
      <MyForm
        loading={loading}
        isLogin={true}
        buttonText={"登录"}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
