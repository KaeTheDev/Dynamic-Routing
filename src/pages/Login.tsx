import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";


const Login: React.FC = () => {
    const auth = useContext(AuthContext);

    if(!auth) return null;

    return (
        <>
        <button onClick={auth.login} className="bg-green-500 hover:bg-green-800 text-white px-4 py-3 rounded">Log In</button>
        </>
    )
}
export default Login;