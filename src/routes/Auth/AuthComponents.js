import react, { useState, useEffect } from "react";
import AuthPresenter from "routes/Auth/AuthPresenter";

const useSet = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    console.log(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return { email, password, onChange, onSubmit };
};
const AuthComponents = () => {
  const { email, password, onChange, onSubmit } = useSet();
  return (
    <AuthPresenter
      email={email}
      password={password}
      onChange={(e) => onChange(e)}
      onSubmit={(e) => onSubmit(e)}
    />
  );
};

export default AuthComponents;
