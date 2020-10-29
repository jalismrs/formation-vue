export const base = 'https://jalis.lightning.force.com';

/**
 *
 * @param {string} path
 * @param {string} id
 * @returns {string}
 */
export const url = (
    path,
    id,
) => {
    return `${base}/lightning/r/${path}/${id}/view`;
};

/**
 *
 * @param {string} id
 * @returns {string}
 */
export const contractUrl = (
    id,
) => {
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
    id,
) => {
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
    id,
) => {
    return url(
        'Suivi_production__c',
        id
    );
};
