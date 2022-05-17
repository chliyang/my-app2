import { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../../utils/http/request";

const useRegisterPage = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [loading, setLoading] = useState<string>();
  const history = useHistory();

  const handleRegister = () => {
    setLoading("正在注册...");
    const data = { username, email, password, phoneNumber };
    http("post", "/register", {}, data)
      .then(() => {
        setLoading("注册成功, 为您自动跳转登录页面");
      })
      .then(() => {
        history.push("/login");
        window.location.reload();
      })
      .catch((e) => {
        setLoading("注册失败, " + e);
      });
  };
  return {
    setUsername,
    setEmail,
    setPassword,
    setPhoneNumber,
    loading,
    handleRegister
  };
};

export default useRegisterPage;
