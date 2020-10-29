import {default as Moment} from 'moment';

/**
 *
 * @param {string} date1
 * @param {string} date2
 * @returns {number}
 */
export const compareDates = (
    date1: string,
    date2: string,
): number => {
    const moment1 = Moment(date1);
    const moment2 = Moment(date2);

    return moment1.diff(moment2);
};

export const areDatesEqual = (
    date1: string,
    date2: string,
): boolean => {
    return compareDates(
        date1,
        date2,
    ) !== 0;
};
