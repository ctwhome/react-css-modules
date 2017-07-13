/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */
import React from "react";
import "./panel.css";
import Dropdown from './../dropdown/Dropdown';

export default class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valueSelected: 0
        }
        this.onDropdownChangeHandler = this.onDropdownChangeHandler.bind(this);
    }

    onDropdownChangeHandler(valueSelected) {
        if (valueSelected !== this.state.valueSelected) {
            this.setState({ valueSelected });
            this.props.onChange(valueSelected)
        }
    }

    render() {
        return <div styleName="panel">
            <div styleName="header">
                <div styleName="title">{this.props.title}</div>
                <div styleName="show">{this.props.shortTitle}</div>
                <div styleName="styledSelect">
                    <Dropdown
                        dropdown={this.props.dropdownOptions}
                        valueSelected={this.state.valueSelected}
                        onChange={this.onDropdownChangeHandler}
                    />
                </div>
            </div>
            <div styleName="content">
                {this.props.children}
            </div>
            <div styleName={`footer ${(this.props.title === "Portfolio") ? "noBorder":""}`}>
                <a styleName="more" href="#">{this.props.more}</a>
            </div>
        </div>;
    }
}
