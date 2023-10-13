import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import setError from "../../utils/setError";
import setSuccess from "../../utils/setSuccess";
import "./Login.css"
import { Button } from "../../components/Button/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   const CheckLogin = async (e) => {
  //     e.preventDefault();
  //     let emailField = document.getElementById("email");
  //     let passwordField = document.getElementById("password");
  //     setSuccess(emailField);
  //     setSuccess(passwordField);
  //     try {
  //       await axios
  //         .post("http://localhost:5000/login", {
  //           email,
  //           password,
  //         })
  //         .then((res) => {

  //           const status =res.status;

  //           console.log(status);
  //           if (status === 200) {
  //             alert("Login success");
  //             navigate("/getUsers");
  //           }
  //         })
  //         .catch((e) => {

  //             const status= e.response.status;
  //             if (status === 404) {

  //                 setError(emailField, "Email is not registered");
  //               } else if (status=== 401) {

  //                 setError(passwordField, "Password id wrong");
  //               }

  //         });
  //     } catch(e) {
  //       console.log("---------errorr-----------",e);
  //     }
  //   };

  return (
    <>
     
      <section>
        <div className="container-login">
          <h1 >Login</h1>

          <form id="form">
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input
                    type="text"
                    value={email}
                    id="email"
                    name="email"
                    data-testid="input-email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                  <span className="text">Email</span>
                  <span className="line"></span>
                  <div className="errormsg"></div>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input
                    type="password"
                    value={password}
                    id="password"
                    name="password"
                    data-testid="input-password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                  />
                  <span className="text">Password</span>
                  <span className="line"></span>
                  <div className="errormsg"></div>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col"></div>
              <div className="col">
               
                  
                  <Button type="submit" text="Login" className="login-button"  />
                 
              </div>
             
                <Link to="/signup">Register here !</Link>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
