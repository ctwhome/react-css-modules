/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */
import React from "react";
import Search from "../search/Search";
import "./header.css";
import FaShare from "react-icons/lib/ti/arrow-forward";
import FaCaretDown from "react-icons/lib/fa/caret-down";
import Button from "../button/Button";

export default () => {
    return <div styleName="header">
        <div styleName="headerContent">
            <div styleName="flex">
                <img styleName="logo" src="svg/DG_Logo.svg" alt="DG Logo"/>
            </div>
            <Search/>
            <div styleName="searchSeparation"/>
            <div styleName="buttonsBlock">
                <Button type="header"> <FaShare/> Share </Button>
                <Button type="header"> Scholtens <FaCaretDown/> </Button>
                <Button type="header"> Log out </Button>
            </div>
        </div>
    </div>;
};