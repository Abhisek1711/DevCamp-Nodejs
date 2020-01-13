import fetch from "isomorphic-fetch";
import { API } from "../config";
import Cookie from "js-cookie";

export const Signup = user => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const Signin = user => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signout = next => {
  removeCookie("token");
  removeLocalStorage("user");
  next();

  return;
  fetch(`${API}/signout`, {
    method: "GET"
  })
    .then(response => {
      console.log("Signout Success");
    })
    .catch(err => console.log(err));
};

//Set Cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    Cookie.set(key, value, {
      expires: 1
    });
  }
};

// remove cookie
export const removeCookie = (key, value) => {
  if (process.browser) {
    Cookie.remove(key, {
      expires: 1
    });
  }
};

//get Cookie
export const getCookie = (key, value) => {
  if (process.browser) {
    return Cookie.get(key);
  }
};

//set localStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

//remove Localstorage
export const removeLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

//authenticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
