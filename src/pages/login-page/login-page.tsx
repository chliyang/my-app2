import React from "react";
import MyForm from "../../components/my-form";
import useLoginPage from "./hooks/use-login-page";
import styles from "./login-page.module.scss";

const LoginPage: React.FC = () => {
  const { loading, setPassword, setUsername, handleLogin } = useLoginPage();
  return (
    <div className={styles.login}>
      <MyForm
        loading={loading}
        buttonText={"登录"}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
