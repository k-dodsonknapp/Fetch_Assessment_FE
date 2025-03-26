/**
 * Function that parses available cookies and returns specified cookie based on a string parameter.
 * @param {*} name
 * @returns cookie string
 */

export default function getCookies(name) {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.includes(name));
  return cookie ? cookie.split("=")[1] : null;
}
