import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './app/styles/index.css';
import App from './app/app';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);