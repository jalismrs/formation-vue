export const base: string = 'https://jalis.lightning.force.com';

/**
 *
 * @param {string} path
 * @param {string} id
 * @returns {string}
 */
export const url = (
    path: string,
    id: string,
): string => {
    return `${base}/lightning/r/${path}/${id}/view`;
};

/**
 *
 * @param {string} id
 * @returns {string}
 */
export const contractUrl = (
    id: string,
): string => {
    return url(
        'Contract',
        id
    );
};

/**
 *
 * @param {string} id
 * @returns {string}
 */
export const opportunityUrl = (
    id: string,
): string => {
    return url(
        'Opportunity',
        id
    );
};

/**
 *
 * @param {string} id
 * @returns {string}
 */
export const technicalFileUrl = (
    id: string,
): string => {
    return url(
        'Suivi_production__c',
        id
    );
};
