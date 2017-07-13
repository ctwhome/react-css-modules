/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */
import React from "react";
import "./chartDetails.css";

export default (props) => {
    return <div styleName="detailsList">
        {props.companyData.map((company, key) => (
            <div styleName="detailsItem" key={key}>
                <span styleName="box" style={{ "backgroundColor": company.color }}></span>
                <span styleName="value">{company.value}</span>
                <span styleName="percentage">{company.percentage}</span>
            </div>
        ))}
    </div>;
}
