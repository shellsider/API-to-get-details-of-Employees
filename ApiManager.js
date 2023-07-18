import axios from "axios";
import { BASE_URL } from "./ApiEndPoint.js";

export const callGetApi = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const callPostApi = (url, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + url, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
