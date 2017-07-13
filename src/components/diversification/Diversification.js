/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */
import React from "react";
import "./diversification.css";
import ChartUi from "./chartUi/ChartUi";
import ChartDetails from "./chartDetails/ChartDetails";

export default class Diversification extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // Loading initial data
            dataCompany: this.props.data[0].data,
            selectedCompany: 0
        }
        this.getDataCompany = this.getDataCompany.bind(this);
    }

    getDataCompany(selectedCompany) {
        return this.props.data[selectedCompany].data;
    }

    componentWillUpdate(nextProps) {

        this.setState({
            dataCompany: this.getDataCompany(nextProps.diversificationSelected),
            selectedCompany: nextProps.diversificationSelected
        })
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.diversificationSelected !== this.state.selectedCompany;
    }

    render() {
        return <div styleName="diversification">
            <ChartUi
                companyData={this.state.dataCompany}
                selectedCompany={this.state.selectedCompany}
            />
            <ChartDetails
                companyData={this.state.dataCompany}
                selectedCompany={this.state.selectedCompany}
            />
        </div>;
    }
}
