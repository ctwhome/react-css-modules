/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

import React from "react";
import "./panels.css";
import Panel from "../panel/Panel";

import data from "../../api/fetchData";

import Diversification from "../diversification/Diversification";
import Table from "../table/Table";
import Portfolio from "../portfolio/Portfolio";

export default class Panels extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            diversificationSelected: 0
        }
        this.onDropdownChangeHandler = this.onDropdownChangeHandler.bind(this);
    }

    onDropdownChangeHandler(diversificationSelected) {
        if (this.state.diversificationSelected !== diversificationSelected) this.setState({ diversificationSelected });
    }

    render() {
        return <div styleName="panels">
            <div styleName="panelsContent">
                <Panel title="Diversification" shortTitle="Show" dropdownOptions={data.diversification.dropdownOptions}
                       more="Show Details" onChange={this.onDropdownChangeHandler}>
                    <Diversification title="Diversification" data={data.diversification.info}
                                     diversificationSelected={this.state.diversificationSelected}/>
                </Panel>
                <Panel title="Portfolio" shortTitle="Show" dropdownOptions={data.portfolio.dropdownOptions}
                       more="Show All">
                    <Portfolio data={data.portfolio.info}/>
                </Panel>
                <Panel title="News" shortTitle="Show" dropdownOptions={data.news.dropdownOptions} more="Show more">
                    <Table data={data.news.info}/>
                </Panel>
                <Panel title="Calendar" shortTitle="Show" dropdownOptions={data.calendar.dropdownOptions}
                       more="Show more">
                    <Table data={data.calendar.info}/>
                </Panel>
            </div>
        </div>
    }
}