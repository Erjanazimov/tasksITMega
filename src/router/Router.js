import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "../pages/login/Login";
import ForgotPass from "../pages/login/ ForgotPass/ ForgotPass";
import TaskList from "../components/taskList/TaskList";
import TaskExecution from "../components/taskExecution/TaskExecution";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="forgotPassword" element={<ForgotPass/>}/>
            <Route path="/taskList" element={<TaskList/>}/>
            <Route path="/taskExecution" element={<TaskExecution/>}/>
        </Routes>
    );
};

export default Router;