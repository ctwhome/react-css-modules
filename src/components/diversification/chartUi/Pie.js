/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

import React from "react";
import '../diversification.css';
export default class Pie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPercentage: 0 };

        this.updateCurrentPercentage = this.updateCurrentPercentage.bind(this);
    }

    updateCurrentPercentage(num) {
        this.props.currentPercentage(num);
    }

    shouldComponentUpdate(nextProps) {
        return JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data);
    }

    render() {
        let colors = this.props.colors,
            colorsLength = colors.length,
            labels = this.props.labels,
            hole = this.props.hole,
            radius = this.props.radius,
            diameter = radius * 2,
            self = this,
            sum, startAngle, d = null;

        sum = this.props.data.reduce(function (carry, current) {
            return carry + current
        }, 0);
        startAngle = 0;


        return (
            <svg width={ diameter } height={ diameter } viewBox={ '0 0 ' + diameter + ' ' + diameter }
                 xmlns="http://www.w3.org/2000/svg" version="1.1">
                { this.props.data.map(function (slice, sliceIndex) {
                    var angle, nextAngle, percent;

                    nextAngle = startAngle;
                    angle = (slice / sum) * 360;
                    percent = (slice / sum) * 100;
                    startAngle += angle;

                    return <Slice
                        key={ sliceIndex }
                        value={ slice }
                        percent={ self.props.percent }
                        percentValue={ percent.toFixed(1) }
                        currentPercentage={self.updateCurrentPercentage}
                        startAngle={ nextAngle }
                        angle={ angle }
                        radius={ radius }
                        hole={ radius - hole }
                        trueHole={ hole }
                        showLabel={ labels }
                        fill={ colors[sliceIndex % colorsLength] }
                        stroke={ self.props.stroke }
                        strokeWidth={ self.props.strokeWidth }
                    />
                }) }
            </svg>
        );
    }
};

class Slice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            path: '',
            x: 0,
            y: 0
        };
        this.mouseOver = this.mouseOver.bind(this);
    }

    getAnglePoint(startAngle, endAngle, radius, x, y) {
        var x1, y1, x2, y2;

        x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
        y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
        x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
        y2 = y + radius * Math.sin(Math.PI * endAngle / 180);
        return { x1, y1, x2, y2 };
    }

    componentWillReceiveProps() {
        this.setState({ path: '' });
        this.animate();
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        this.draw(0);
    }

    draw(s) {
        let p = this.props, path = [], a, b, c, self = this, step;
        step = p.angle / (37.5 / 2);
        if (s + step > p.angle) {
            s = p.angle;
        }
        // Get angle points
        a = this.getAnglePoint(p.startAngle, p.startAngle + s, p.radius, p.radius, p.radius);
        b = this.getAnglePoint(p.startAngle, p.startAngle + s, p.radius - p.hole, p.radius, p.radius);

        path.push('M' + a.x1 + ',' + a.y1);
        path.push('A' + p.radius + ',' + p.radius + ' 0 ' + (s > 180 ? 1 : 0) + ',1 ' + a.x2 + ',' + a.y2);
        path.push('L' + b.x2 + ',' + b.y2);
        path.push('A' + (p.radius - p.hole) + ',' + (p.radius - p.hole) + ' 0 ' + (s > 180 ? 1 : 0) + ',0 ' + b.x1 + ',' + b.y1);

        // Close
        path.push('Z');

        this.setState({ path: path.join(' ') });

        if (s < p.angle) {
            setTimeout(function () {
                self.draw(s + step)
            }, 16);
        } else if (p.showLabel) {
            c = this.getAnglePoint(p.startAngle, p.startAngle + (p.angle / 2), (p.radius / 2 + p.trueHole / 2), p.radius, p.radius);
            this.setState({
                x: c.x2,
                y: c.y2
            });
        }
    }

    mouseOver(e) {
        this.props.currentPercentage(this.props.value);
        e.target.classList.add('active');
    }

    mouseLeaves(e) {
        e.target.classList.remove('active');
    }

    render() {

        return (
            <g onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeaves}>
                <path
                    d={ this.state.path }
                    fill={ this.props.fill }
                    stroke={ this.props.stroke }
                    strokeWidth={ this.props.strokeWidth }
                />
                { this.props.showLabel && this.props.percentValue > 5 ?
                    <text x={ this.state.x } y={ this.state.y } fill="#fff" textAnchor="middle">
                        { this.props.percent ? this.props.percentValue + '%' : this.props.value }
                    </text>
                    : null }
            </g>
        );
    }
}
