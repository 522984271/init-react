/*
    应用的根组件
*/
import HelloWorld from "./components/HelloWorld";
import {Button} from "antd";
import {Redirect, Route,Switch} from "react-router-dom";

import Login from "./pages/login";
import Admin from "./pages/admin";

export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/admin" component={Admin}/>
                <Redirect to="/login"/>
            </Switch>
        </div>
    );
}
