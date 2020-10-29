import {default as moment} from 'moment';

/**
 *
 * @param {string} date1
 * @param {string} date2
 * @returns {number}
 */
export const compareDates = (
    date1,
    date2,
) => {
    const moment1 = moment(date1);
    const moment2 = moment(date2);

    return moment1.diff(moment2);
};

export const areDatesEqual = (
    date1,
    date2,
) => {
    return compareDates(
        date1,
        date2,
    ) !== 0;
};
