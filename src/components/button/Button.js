/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */
import React from "react";
import "./button.css";

export default (props) => {
    return <div styleName={`button ${props.type}`}>
        {props.children}
    </div>;
};