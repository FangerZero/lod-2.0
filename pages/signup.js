import { useState } from "react"
import Captcha from '../components/util/captcha'

export default function Signup() {
    const [email, setEmail] = useState("");
    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [captcha, setCaptcha] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    
    const signup = () => {
        if (email.length === 0 && password.length === 0) {
            setErrorMsg("Email and Password missing");
        } else if (email.length === 0) {
            setErrorMsg("Email missing");
        } else if (password.length === 0) {
            setErrorMsg("Password missing");
        } else if (password !== password2) {
            setErrorMsg("Passwords do not match");
        } else if (captcha) {
            setErrorMsg("Please try again");
        } else if (tryLogin(email, password, alias)) {
            setErrorMsg("Issue signing up, try again later or contact admin.");
        }
    }

    const tryLogin =(email, password, alias) => {
        return true;
    }

    return (
      <div className="md:justify-center flex flex-row flex-wrap mt-5 md:mx-60" data-cy="nav-login">
        <div>Fill in the data to sign up, Alias not required</div>
        <div>
            <input className="text-box mx-3 my-1" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input className="text-box mx-3 my-1" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input className="text-box mx-3 my-1" type="password" placeholder="Retype Password" onChange={(e) => setPassword2(e.target.value)} value={password2}/>
            <input className="text-box mx-3 my-1" type="text" placeholder="Alias" onChange={(e) => setAlias(e.target.value)} value={alias}/>
        </div>
        {email && password && password === password2 &&
            <Captcha setCaptcha={setCaptcha}/>
        }
        {(errorMsg !== "") && 
            <div>{errorMsg}</div>
        }
        {!captcha &&
            <div className={captcha ? "btn" : "btn disabled"} onClick={signup}>Sign Up</div>
        }
      </div>
    )
  }
  