/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

const INFO = [
    {
        company: "Aalberts",
        icons: [{
            path: "svg/CleanWater.svg",
            tooltip: "Clean Water"
        }, {
            path: "svg/ClimateAction.svg",
            tooltip: "Climate Action"
        }],
        change: "0.5"
    },
    {
        company: "ABN Amro",
        icons: [{
            path: "png/4.png",
            tooltip: "Agreement"
        }, {
            path: "svg/GenderEquality.svg",
            tooltip: "Equal Rights"
        }, {
            path: "svg/DecentWork.svg",
            tooltip: "Decent Work"
        }],
        change: "0.5"
    },
    {
        company: "Aegon",
        icons: [{
            path: "png/2.png",
            tooltip: "Aegon"
        }, {
            path: "svg/GoodHealth.svg",
            tooltip: "Good Health"
        }],
        change: "0.5"
    },
    {
        company: "Ahold Delhaize",
        icons: [{
            path: "svg/ClimateAction.svg",
            tooltip: "Climate Action"
        }, {
            path: "png/5.png",
            tooltip: "Anntena"
        }, {
            path: "png/1.png",
            tooltip: "Warren Buffett"
        }],
        change: "0.5"
    },
    {
        company: "Arcelor Mittal",
        icons: [{
            path: "svg/CleanWater.svg",
            tooltip: "Clean Water"
        }, {
            path: "png/3.png",
            tooltip: "Recycle"
        }],
        change: "0.5"
    }
];


const dropdownOptions = ['Dropdown'] // Mocked data

const DATA = {
    dropdownOptions,
    info: INFO
}

export default DATA;
