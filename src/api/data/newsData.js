/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

const INFO = [
    {
        date: "09:08",
        news: "Summary numbers: Revenues of USD 8.58 million, Net Earnings of USD -0.40 million.",
        icon: {
            path: "svg/ClimateAction.svg",
            tooltip: "Climate Action"
        }
    },
    {
        date: "08:12",
        news: "Gross margins widened from 18.39% to 20.22% compared to the same period last year, operating (EBITDA) margins now -1.44% from -5.15%.",
        icon: {
            path: "svg/DecentWork.svg",
            tooltip: "Decent Work"
        }
    },
    {
        date: "07:34",
        news: "Year-on-year change in operating cash flow of -135.60% is about the same as the change in earnings, likely no significant movement in accruals or reserves.",
        icon: {
            path: "svg/GoodHealth.svg",
            tooltip: "Good Health"
        }
    },
    {
        date: "05:42",
        news: "Earnings growth from operating margin improvements as well as one-time items.",
        icon: {
            path: "png/1.png",
            tooltip: "Warren Buffett"
        }
    },
    {
        date: "06/04/17",
        news: "All-clear for big banks raises fears of a return to risk",
        icon: {
            path: "png/3.png",
            tooltip: "Recycle"
        }
    }
];


const dropdownOptions = ['today']

const DATA = {
    dropdownOptions,
    info: INFO
}

export default DATA;
