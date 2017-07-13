/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */
import React from "react";
import "./nav.css";

export default () => {

    // Mock data
    const menuItems = [
        { name: "Dashboard", active: true },
        { name: "Portfolio" },
        { name: "Transfer" },
        { name: "Rebalance", marked: true },
        { name: "Categories" }
    ];

    return <div styleName="nav">
        <div styleName="navContent">
            {menuItems.map((item) => {
                this.active = (item.active !== undefined) ? "active" : "";
                return <div key={item.name} styleName={`item ${this.active}`}>{item.name}</div>
            })}
        </div>
    </div>;
};