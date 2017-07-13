/**
 *  Degiro Assignment - 2017
 * -------------------------
 * https://github.com/ctwhome/dashboard
 * @author Jesus Garcia <ctw@ctwhome.com> 30/06/2017
 *
 */

const INFO = [
    {
        company: 'ACN',
        data: [{
            value: 'Stocks',
            percentage: 15,
            color: '#009FDF' // blue
        },
            {
                value: 'Bonds',
                percentage: 23,
                color: '#293D4A' // dark-grey
            },
            {
                value: 'Real estate',
                percentage: 62,
                color: '#9AA9B7' // light-grey
            }
        ]
    },
    {
        company: 'GIB',
        data: [{
            value: 'Stocks',
            percentage: 20,
            color: '#009FDF' // blue
        },
            {
                value: 'Bonds',
                percentage: 21,
                color: '#293D4A' // dark-grey
            },
            {
                value: 'Real estate',
                percentage: 59,
                color: '#9AA9B7' // light-grey
            }
        ]
    },
    {
        company: 'CACI',
        data: [{
            value: 'Stocks',
            percentage: 5,
            color: '#009FDF' // blue
        },
            {
                value: 'Bonds',
                percentage: 10,
                color: '#293D4A' // dark-grey
            },
            {
                value: 'Real estate',
                percentage: 85,
                color: '#9AA9B7' // light-grey
            }
        ]
    },
    {
        company: 'EPAM',
        data: [{
            value: 'Stocks',
            percentage: 63,
            color: '#009FDF' // blue
        },
            {
                value: 'Bonds',
                percentage: 18,
                color: '#293D4A' // dark-grey
            },
            {
                value: 'Real estate',
                percentage: 9,
                color: '#9AA9B7' // light-grey
            }
        ]
    }
];

// Getting all different months
const dropdownOptions = [...new Set(INFO.map(info => info.company))]

const DATA = {
    dropdownOptions,
    info: INFO
}

export default DATA;
