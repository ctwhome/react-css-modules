/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

const INFO = [
    {
        day: "12 Wed",
        month: "Apr 2017",
        news: "Alicanto Minerals Ltd (AQI)",
        icon: {
            path: "png/2.png",
            tooltip: "Trader"
        }
    },
    {
        day: "12 Wed",
        month: "Apr 2017",
        news: "Bright Real Estate (600708)",
        icon: {
            path: "svg/GenderEquality.svg",
            tooltip: "Equal Rights"
        }
    },
    {
        day: "11 Wed",
        month: "Apr 2017",
        news: "Sunshine (SUN)",
        icon: {
            path: "svg/DecentWork.svg",
            tooltip: "Decent Work"
        }
    },
    {
        day: "10 Wed",
        month: "Apr 2017",
        news: "T&S Communications (300570)",
        icon: {
            path: "svg/ClimateAction.svg",
            tooltip: "Climate Action"
        }
    },
    {
        day: "10 Wed",
        month: "Apr 2017",
        news: "Orion lXL (ORIO)",
        icon: {
            path: "png/4.png",
            tooltip: "Agreement"
        }
    }
];

// Getting all different months
const dropdownOptions = [...new Set(INFO.map(info => info.month))]
const DATA = {
    dropdownOptions,
    info: INFO
}

export default DATA;
