import React from "react";
import ReactDom from "react-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Info from "./components/info/Info";
import Panels from "./components/panels/Panels";
import "./components/main.css";

ReactDom.render(
    <div styleName="main">
        <Header/>
        <Nav/>
        <Info/>
        <Panels/>
    </div>,
    document.getElementById('app'));
