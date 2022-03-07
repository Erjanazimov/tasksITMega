import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "../pages/login/Login";
import ForgotPass from "../pages/login/ ForgotPass/ ForgotPass";
import TaskList from "../components/taskList/TaskList";
import TaskExecution from "../components/taskExecution/TaskExecution";
import Mentor from "../pages/mentor/Mentor";
import Download from "../pages/download/Download";
import LoadTask from "../pages/download/loadTask/LoadTask";
import Change from "../pages/mentor/change/Change";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="forgotPassword" element={<ForgotPass/>}/>
            <Route path="/taskList" element={<TaskList/>}/>
            <Route path="/taskExecution" element={<TaskExecution/>}/>
            <Route path="/mentor" element={<Mentor/>}/>
            <Route path="/download" element={<Download/>}/>
            <Route path="/change" element={<Change/>}/>
            <Route path="/loadTask" element={<LoadTask/>}/>
        </Routes>
    );
};

export default Router;