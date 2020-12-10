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

const AuthPresenter = ({ email, password, onChange, onSubmit, newAccount, error, toggleAccount, onSocialClick }) => {
    return (
        <LoginContainer>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Login
                    onChange={(e) => onChange(e)}
                    type="email"
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
                <Login type="submit" value={newAccount ? "회원가입" : "로그인"}></Login>
                <span>{error}</span>
            </Form>
            <span onClick={() => toggleAccount()}>{newAccount ? "로그인" : "회원가입"}</span>
            {console.log(newAccount)}
            <LoginButtonContainer>
                <LoginButton onClick={(e) => onSocialClick(e)} name="google">
                    Continue with Google
                </LoginButton>
                <LoginButton onClick={(e) => onSocialClick(e)} name="github">
                    Continue with GitHub
                </LoginButton>
            </LoginButtonContainer>
        </LoginContainer>
    );
};

export default AuthPresenter;
