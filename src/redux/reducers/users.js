import {
    SET_NAME,
  } from "../constants";
  
  export default (oldState = {}, action) => {
    switch (action.type) {
      case SET_NAME:
        return {
          ...oldState,
          userName: action.payload
        };
      default:
        return oldState;
    }
  };