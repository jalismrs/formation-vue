/**
 *
 * @param {string} path
 * @returns {string}
 */
export const buildUrl = (
    path: string = '',
): string => {
    return `/api/${path}`
        .replace(
            /\/+/g,
            '/',
        );
};
