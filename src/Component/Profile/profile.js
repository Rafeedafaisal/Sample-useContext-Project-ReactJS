import { useContext } from "react";
import { loginContext } from "../context/context";
export default function Profile() {
    const {login}=useContext(loginContext)
    return(
        <div>
            <h2>{login}</h2>
        </div>
    )
}