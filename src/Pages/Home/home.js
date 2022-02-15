import Login from "../../Component/Login/login";
import { loginContext } from "../../Component/context/context";
import { useState } from "react";
import Profile from "../../Component/Profile/profile";
export default function Home() {
  const [login, setlogin] = useState("");
    return(
        <>
        <loginContext.Provider value={{login,setlogin}}>
            <Login/>
            <Profile/>
            </loginContext.Provider>
        
        </>
    )
}