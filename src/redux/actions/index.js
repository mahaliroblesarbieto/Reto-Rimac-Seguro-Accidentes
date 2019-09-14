import {
    SET_NAME,
  } from "../constants";
export const setName = name => ({ type: SET_NAME, payload:{name} });