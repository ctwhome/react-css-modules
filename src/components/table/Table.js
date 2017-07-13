/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

import React from "react";
import "./table.css";
import ReactTooltip from "react-tooltip";

export default (params) => {
    return <div styleName="table">
        {params.data.map((row, key) => {
            return <div styleName="row" key={key}>
                {
                    (row.day !== undefined) ?
                        <div styleName="dateBlock">
                            <div styleName="day">{row.day}</div>
                            <div styleName="month">{row.month}</div>
                        </div>
                        :
                        <div styleName="date">{row.date}</div>
                }
                <div styleName="news">{row.news}</div>
                <div styleName="icon">
                    <img data-tip={row.icon.tooltip} src={row.icon.path} alt={row.icon.tooltip}/>
                    <ReactTooltip />
                </ div >
            </div>
        })}
    </div>;
};