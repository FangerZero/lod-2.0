import { useEffect, useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const login = () => {
        if (email.length === 0 && password.length === 0) {
            setErrorMsg("Email and Password missing");
        } else if (email.length === 0) {
            setErrorMsg("Email missing");
        } else if (password.length === 0) {
            setErrorMsg("Password missing");
        } else if (tryLogin()) {
            setErrorMsg("Credentials incorrect");
        }
    }

    const tryLogin =() => {
        // need to rename but we're going to try to login return true if failed.
        return true;
    }

    const reset = () => {
        setErrorMsg("");
        setEmail("");
        setPassword("");
    }

    return (
      <div data-cy="nav-login" onPointerLeave={() => reset()}>
        <input className="text-box mx-3 my-1" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input className="text-box mx-3 my-1" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        {(errorMsg !== "") && 
            <div>{errorMsg}</div>
        }
        <div className="nav-style" onClick={login}>Log In</div>
      </div>
    )
  }
  