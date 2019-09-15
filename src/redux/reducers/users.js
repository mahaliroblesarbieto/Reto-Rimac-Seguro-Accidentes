import {
    SET_NAME,
  } from "../constants";
  
  export default (oldState = {}, action) => {
    switch (action.type) {
      case SET_NAME:
        return {
          ...oldState,
        };
      default:
        return oldState;
    }
  };