import React from 'react';
import LoginCss from "./Login.module.css";
import logo from "../../images/__.png"
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className={LoginCss.flex_login}>
            <div className={LoginCss.logo}>
                <div className={LoginCss.cube}>
                    <div>
                     <img src={logo} className={LoginCss.logoImg}/>
                    </div>
                </div>
            </div>
            <div className={LoginCss.auth}>
                <div className="dBlock">
                <div className={LoginCss.authForm}>
                    <h1>IT-School <br/> Task Manager</h1>
                    <form action="" className={LoginCss.formLogin}>
                        <div>
                            <label form="exampleInputEmail1"><b>Логин</b></label><br/>
                            <input required type="email1" id="exampleInputEmail1"/>
                        </div>
                        <div className={LoginCss.pass}>
                            <label form="pass"><b>Пароль</b></label><br/>
                            <input required type="password" id="pass"/>
                        </div>
                        <div className={LoginCss.authPass}>
                            <Link to="/forgotPassword"> Забыли пароль?</Link>
                        </div>

                            <Link to="/taskList" className={LoginCss.button}>
                            <input type="submit" value="Войти"/>
                            </Link>

                    </form>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Login;