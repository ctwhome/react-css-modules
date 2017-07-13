/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

import React from "react";
import "./portfolio.css";
import ReactTooltip from "react-tooltip";

export default (params) => {
    return <div styleName="portfolio">
        {
            params.data.map((row, key) => {
                return <div styleName="row" key={key}>
                    <div styleName="company">{row.company}</div>
                    {
                        row.icons.map((icon, key) => <div key={key} styleName="icon">
                                <img data-tip={icon.tooltip} src={icon.path} alt={icon.tooltip}/>
                                <ReactTooltip />
                            </div>
                        )
                    }
                    <div styleName="change">{row.change}</div>
                </div>
            })
        }
    </div>;
};
