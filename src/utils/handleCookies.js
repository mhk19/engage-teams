export function setCookie(key, value) {
  const newCookie = `${key}=${value}`;
  document.cookie = newCookie;
}

export function parseCookies() {
  const initialCookies = document.cookie;
  let cookies = {};
  let separateCookies = initialCookies.split('; ');
  separateCookies.forEach((cookie) => {
    let array = cookie.split('=');
    cookies[`${array[0]}`] = array[1];
  });
  return cookies;
}

export function getCookie(key) {
  const cookies = parseCookies();
  return cookies[`${key}`];
}
