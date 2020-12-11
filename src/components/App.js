import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

function App() {
    const [init, setInit] = useState(false); // 로그인 상태이면 Home 화면으로 isLoggedIn true값 보내기
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인체크
    const [userObj, setUserObj] = useState(null);
    useEffect(
        () =>
            authService.onAuthStateChanged((user) => {
                // 해당유저가 로그인 상태인지
                if (user) {
                    setIsLoggedIn(true);
                    setUserObj(user);
                } else {
                    setIsLoggedIn(false);
                }
                setInit(true);
            }),
        []
    );
    return (
        <>
            {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "Loding"}

            <footer>&copy;{new Date().getFullYear()} Nwitter</footer>
        </>
    );
}

export default App;
