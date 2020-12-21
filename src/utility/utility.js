import moment from "moment";
import decode from "jwt-decode";
import { DefaultProfilePng } from "../assets";

export const formatNumber = (num) => {
  return String(num).replace(/(.)(?=(\d{3})+$)/g, "$1.");
};

export const formatTimeNow = (date) => {
  return moment(date * 1000)
    .startOf("hour")
    .fromNow();
};

export const capitalize = (word) =>
  word
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
    .join(" ");

export const hasToken = () => {
  return !!localStorage.getItem("kestingrum-web");
};

export const getToken = () => {
  return localStorage.getItem("kestingrum-web");
};

export const removeToken = () => {
  return localStorage.removeItem("kestingrum-web");
};

export const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const phoneNumber = (phone) => {
  let result = "";
  for (let i = 0; i < phone.length; i++) {
    if (i % 4 === 0) {
      result += ` ${phone[i]}`;
    } else {
      result += phone[i];
    }
  }
  return result;
};

export const replaceString = (target, oldChar, newChar) => {
  let result = target.replace(oldChar, newChar);
  return result;
};

export const youtubeVideoId = (string) => {
  let result = string.split("/embed/");
  return result[result.length - 1];
};

export const decodeToken = (token) => {
  return decode(token);
};

export const reverseWord = (sentence) => {
  const sentenceInArray = sentence.split(" ");
  return sentenceInArray.reverse().join(" ");
};

export const cekVideoUrl = (url) => {
  const fiveInitialCharacters = url.slice(0, 5);

  if (fiveInitialCharacters === "https") {
    return url;
  } else {
    return "https://" + url;
  }
};

export const getProfilePic = (url) => {
  let fiveInitialCharacters;
  if (url && typeof url === "string" && url.length > 5) {
    fiveInitialCharacters = url.slice(0, 5);
  }

  if (fiveInitialCharacters === "https") {
    return url;
  } else {
    return DefaultProfilePng;
  }
};
