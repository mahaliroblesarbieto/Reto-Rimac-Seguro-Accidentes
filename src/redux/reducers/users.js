import {
    SET_NAME,
    GET_DATA_USER,
  } from "../constants";
  
  export default (oldState = {}, action) => {
    switch (action.type) {
      case SET_NAME:
        return {
          ...oldState,
          userName: action.payload
        };
        case GET_DATA_USER:
        return {
          ...oldState,
          userData: action.payload
        };
      default:
        return oldState;
    }
  };