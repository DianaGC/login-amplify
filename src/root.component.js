import { BrowserRouter, Route, Routes, redirect, redirectDocument } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";


const isUser = localStorage.getItem("CognitoIdentityServiceProvider.294qvbrfav2d0ff8ifapt0c7pe.6a41d144-0014-4263-b02a-779971abea9c.signInDetails");
const isUser2 = JSON.parse(localStorage.getItem("CognitoIdentityServiceProvider.294qvbrfav2d0ff8ifapt0c7pe.6a41d144-0014-4263-b02a-779971abea9c.signInDetails"))

const Root = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Login}  />
                    <Route path='/digimons' Component={Dashboard}/>
               
                </Routes>
            </BrowserRouter>
    )
}

export default Root;

/*<Route path='/' render={()=> isUser ? <Dashboard/> :   <Route path='/' Component={Login}  />} />*/