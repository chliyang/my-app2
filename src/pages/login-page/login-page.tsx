import React from "react";
import MyForm from "../../components/my-form";
import useLoginPage from "./hooks/use-login-page";

const LoginPage: React.FC = () => {
  const { loading, setPassword, setUsername, handleLogin } = useLoginPage();
  return (
    <div className="box-border h-1/2 w-1/2 lg:w-1/3 bg-white shadow-lg p-10">
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
