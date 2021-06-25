import { combineReducers } from "redux";
import {
  CREATE_CONTACT,
  CREATE_NEW_LIST,
  DELETE_CONTACT_INFO,
  DELETE_FROM_LIST,
  LOG_OUT,
  MARK_AS_COMPLETE,
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED
} from "../constants/constants.js";

var initialtodolist = [];

for (let i = 0; i < 16; i++) {
  initialtodolist.push([]);
}

var initialtodolistStatusData = new Array(16).fill(false);

const setupTask = (state = initialtodolist, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[1].slice());
      }
      stateCopy[action.id].push(action.id);
      return stateCopy;
    case CREATE_NEW_LIST:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
  }
}
