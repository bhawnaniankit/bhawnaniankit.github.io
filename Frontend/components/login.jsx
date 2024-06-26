import React, { useState } from "react";
import "./sign.css"
import axios from "axios";

export function LogIn() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <React.Fragment>
        <div className="SignUp">
            <h2>Log In</h2>
            <p>Welcome to the most Awesome Website</p>
            <input type="text" placeholder="Name" className="signup-input" onChange={(e) => {
                setName(e.target.value);
            }} />
            <input type="text" placeholder="Email" className="signup-input" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" placeholder="Password" className="signup-input" onChange={(e) => { setPassword(e.target.value) }} />
            <div className="btn-div">
                <button className="signup-btn" onClick={async () => {
                    try {
                        const res = await axios.get("http://localhost:3000/log-in", { params: { name: name, email: email, password: password } });
                        console.log(res);
                    }
                    catch (err) {
                        console.log(err);
                        // return;
                        alert(err.response.data.msg);
                        return console.log(err.response.data.msg);
                    }
                    alert("Successfully Logged In");
                }}>Log In</button>
            </div>
        </div>
    </React.Fragment>
}
