/*
    应用的入口文件
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/antd/dist/antd.less';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,
    //将App组件渲染到root标签上
    document.getElementById('root')
);

