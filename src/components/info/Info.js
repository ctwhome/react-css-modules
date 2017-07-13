/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

import React from "react";
import FaStar from "react-icons/lib/fa/star";
import FaRefresh from "react-icons/lib/fa/refresh";
import Button from "../button/Button";
import "./info.css";

export default () => {
    return <div styleName="info">
        <div styleName=" infoContent">

            <div styleName="layoutColumn paddingLeftBlock">
                <div styleName="flex">
                    <div styleName="headlineFont">€ 78.389,74</div>
                    <div styleName="caption2Font lightText">Total value</div>
                </div>
                <div styleName="layoutRow details">
                    <div>
                        <span styleName="rate">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </span>
                        <div styleName="caption2Font lightText subtitle">Portfolio quality</div>
                    </div>
                    <div styleName="hidePhone">
                        <div styleName="titleFont">€ 1.524,68</div>
                        <div styleName="caption2Font lightText subtitle">Total earnings</div>
                    </div>
                    <div styleName="hidePhone">
                        <div styleName="titleFont">€ 1.973.524,68</div>
                        <div styleName="caption2Font lightText subtitle">GOAL VALUE</div>
                    </div>
                </div>
            </div>
            <div styleName="layoutRow buttons paddingLeftBlock hidePhone">
                <Button type="rebalance" styleName="subHeader2Font"><FaRefresh/> Rebalance</Button>
                <Button type="deposit" styleName="subHeader2Font"> $ Deposit</Button>
            </div>
        </div>
    </div>;
};