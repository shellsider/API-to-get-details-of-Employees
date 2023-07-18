import axios from "axios";
import {
  BASE_URL,
  CREATE_USERS,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./ApiEndPoint.js";
import { callGetApi, callPostApi } from "./ApiManager.js";

const getUsrsList = async () => {
  callGetApi(GET_USERS())
    .then((res) => {
      console.log(res);
    })
    .catch((er) => {
      console.log(er);
    });
};

const createUser = async (userData) => {
  const payload = {
    data: [userData],
  };
  callPostApi(CREATE_USERS, payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = async (userData, id) => {
  const USER_ID = "/" + id;
  axios
    .put(BASE_URL + UPDATE_USER + USER_ID, userData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = async (id) => {
  const USER_ID = "/" + id;
  axios
    .delete(BASE_URL + DELETE_USER + USER_ID)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// createUser({
//   name: "Smack",
//   age: 17,
//   email: "smack@gmail.com",
// });
// updateUser(
//   {
//     name: "Smack3",
//     age: 22,
//     email: "122001@gmail.com",
//   },
//   2
// );
getUsrsList();
deleteUser(2);
getUsrsList();
