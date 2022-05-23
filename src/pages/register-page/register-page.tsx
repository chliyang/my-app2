import React from "react";
import MyForm from "../../components/my-form";
import useRegisterPage from "./hooks/use-register-page";
import styles from "./register-page.module.scss";

const RegisterPage: React.FC = () => {
  const {
    loading,
    setEmail,
    setPassword,
    setPhoneNumber,
    setUsername,
    handleRegister
  } = useRegisterPage();
  return (
    <div className={styles.register}>
      <MyForm
        loading={loading}
        buttonText="立即注册"
        styles={styles}
        title="注册信息填写"
        showConfirmPassword={true}
        showEmail={true}
        showPhone={true}
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        handleSubmit={handleRegister}
      />
    </div>
  );
};

export default RegisterPage;
