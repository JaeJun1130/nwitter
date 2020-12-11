import AuthPresenter from "routes/Auth/AuthPresenter";
import { authService, firebaseInstance } from "fBase";
import react, { useState, useEffect } from "react";

const AuthContainer = () => {
    const [email, setEmail] = useState(""); /*아이디*/
    const [password, setPassword] = useState(""); /*비번*/
    const [newAccount, setNewAcoount] = useState(true); /*회원가입 & 로그인*/
    const [error, setError] = useState("");

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
                await authService.createUserWithEmailAndPassword(email, password); //로그인
            } else {
                //로그인
                await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }
    };

    const toggleAccount = () => {
        setNewAcoount((prev) => !prev);
    };

    const onSocialClick = async (e) => {
        const {
            target: { name },
        } = e;
        let provider;

        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    };

    return (
        <AuthPresenter
            email={email}
            password={password}
            onChange={onChange}
            onSubmit={onSubmit}
            newAccount={newAccount}
            error={error}
            toggleAccount={toggleAccount}
            onSocialClick={onSocialClick}
        />
    );
};

export default AuthContainer;
