import {
    SET_NAME,
    GET_DATA_USER,
  } from "../constants";

  const API = "https://freestyle.getsandbox.com/dummy/obtenerdatospersona";
export const setName = name => ({ type: SET_NAME, payload:{name} });

export const getDataUser = () => {
  return dispatch => fetch(API, {
    method: "POST",
    headers: {
      headers:{
        'Content-Type': 'application/json'
      }
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: GET_DATA_USER,
        payload: data.data.tercero
      });
    });
};