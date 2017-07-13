/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */
import React from 'react';
import Pie from './Pie';

import '../diversification.css';


export default class ChartUi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPercentages(this.props),
        }

        this.updateCurrentPercentage = this.updateCurrentPercentage.bind(this);
    }

    getPercentages(props) {
        const percentages = [];

        props.companyData.map( (company) => { percentages.push(company.percentage) });
        return percentages;
    }

    getColors() {
        const colors = [];
        this.props.companyData.map( (company) => { colors.push(company.color) });
        return colors;
    }

    updateCurrentPercentage(num) {
        this.setState({ currentPercentage: `${num}%` });
    }

    componentDidMount() {
        this.setState({ data: this.getPercentages(this.props) });
    }

    componentWillUpdate(nextProps) {
        if (this.props.selectedCompany !== nextProps.selectedCompany) {
            this.updateCurrentPercentage(0);
            this.setState({
                data: this.getPercentages(nextProps)
            })
        }
    }

    render() {
        return (
            <div styleName="pie">
                <Pie
                data={ this.state.data }
                radius={ 100 }
                hole={ 60 }
                colors={ this.getColors() }
                labels={ false }
                percent={ false }
                strokeWidth={ 0 }
                currentPercentage={this.updateCurrentPercentage}
                stroke={ '#fff' }
                />
                <p styleName="percentage">{ this.state.currentPercentage || ''}</p>
            </div>
        );
    }
}
