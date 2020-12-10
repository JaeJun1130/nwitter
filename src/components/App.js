import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

function App() {
  const [init, setInit] = useState(false); // 로그인 상태이면 Home 화면으로 isLoggedIn true값 보내기
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인체크
  useEffect(
    () =>
      authService.onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setInit(true);
      }),
    []
  );
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Loding"}

      <footer>&copy;{new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
