import react from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  border: 1px solid red;
`;

const LoginButtonContainer = styled.div`
  border: 1px solid blue;
`;

const Login = styled.input`
  display: flex;
`;
const LoginButton = styled.button``;

const Form = styled.form``;

const AuthPresenter = ({ email, password, onChange, onSubmit }) => {
  return (
    <LoginContainer>
      <Form onSubmit={onSubmit}>
        <Login
          onChange={onChange}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          required
        ></Login>
        <Login
          onChange={onChange}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          required
        ></Login>
        <Login type="submit" value="Login in"></Login>
      </Form>
      <LoginButtonContainer>
        <LoginButton>Continue with Google</LoginButton>
        <LoginButton>Continue with GitHub</LoginButton>
      </LoginButtonContainer>
    </LoginContainer>
  );
};

export default AuthPresenter;
