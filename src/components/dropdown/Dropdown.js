import React from 'react';

export default class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valueSelected: 0
        };
        this.onSelectChangeHandler = this.onSelectChangeHandler.bind(this);
    }

    onSelectChangeHandler(e) {
        this.setState({ valueSelected: parseInt(e.target.value) });

        this.props.onChange(parseInt(e.target.value));
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.selectedValue !== this.state.selectedValue;
    }

    componentWillUpdate(nextProps) {
        // this.setState({
        //     dataCompany: this.getDataCompany(nextProps),
        //     selectedCompany: nextProps.selectedValue
        // })
    }

    render() {

        return (
            <select onChange={this.onSelectChangeHandler}>
                {
                    this.props.dropdown.map((data, key) => (
                            <option value={key} key={key}>{data}</option>
                        )
                    )
                }
            </select>
        );
    }
}
