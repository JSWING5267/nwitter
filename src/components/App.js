import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const [init, setInit] = useState(false);
  
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){

        setUserObj(user);  
      }
      setInit(true);
    });
  }, []);
  return(
    <>
      {init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
       : "Initailizing...."}
      <footer>&copy; Nwitter {new Date().getFullYear()} </footer>
    </> 
  );
}

export default App;
