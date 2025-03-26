/**
 * Clear authentication from local storage
 * @returns {void}
 */

export const clearLocalStorage = () => {
  localStorage.removeItem("fetch-access");
};

/**
 * Clear authentication from cookies
 * @returns {void}
 */

export const clearCookies = () => {
  document.cookie =
    "fetch-access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
};

/**
 * Clear authentication from local storage and cookies
 * @returns {void}
 */
