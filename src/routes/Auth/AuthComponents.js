import { authService } from "fBase";
import react, { useState, useEffect } from "react";
import AuthPresenter from "routes/Auth/AuthPresenter";

const useSet = () => {
  const [email, setEmail] = useState(""); /*아이디*/
  const [password, setPassword] = useState(""); /*비번*/
  const [newAccount, setNewAcoount] = useState(true); /*회원가입 & 로그인*/

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        //계정 생성
        const data = await authService.createUserWithEmailAndPassword(
          email,
          password
        ); //로그인
      } else {
        const data = await authService.signInWithEmailAndPassword(
          email,
          password
        );
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { email, password, onChange, onSubmit, newAccount };
};
const AuthComponents = () => {
  const { email, password, onChange, onSubmit, newAccount } = useSet();
  return (
    <AuthPresenter
      email={email}
      password={password}
      onChange={(e) => onChange(e)}
      onSubmit={(e) => onSubmit(e)}
      newAccount={newAccount}
    />
  );
};

export default AuthComponents;
