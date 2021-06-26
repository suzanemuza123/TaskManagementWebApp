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
    case CREATE_NEW_LIST:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[1].slice());
      }
      stateCopy[action.id].push(action.id);
      return stateCopy;
    case MARK_AS_COMPLETE:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      console.log(action);
      stateCopy[action.id].splice(action.id);
      return stateCopy;
    case SUBMIT:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      console.log(action);
      stateCopy[action.id].splice(action.id);
      return stateCopy;
    case SHOW_ACTIVE:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      console.log(action);
      stateCopy[action.id].splice(action.id);
      return stateCopy;
    case DELETE_FROM_LIST:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      console.log(action);
      stateCopy[action.id].splice(action.id);
      return stateCopy;
    case SHOW_ALL:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      console.log(action);
      stateCopy[action.id].splice(action.id);
      return stateCopy;
    case SHOW_COMPLETED:
      var stateCopy = [];
      for (let i = 0; i < 16; i++) {
        stateCopy.push(state[i].slice());
      }
      stateCopy[action.id] = [];
      return stateCopy;
    default:
      return state;
  }
};

const CreateAContact = (state = 0, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      if (state === action.id) return null;
      else return action.id;
    default:
      return state;
  }
};

const reducer = combineReducers({
  CreateAContact,
  setupTask
});

export default reducer;
