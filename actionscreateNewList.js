import { CREATE_NEW_LIST } from "../constants/constants.js";

const createNewList = id => {
  return {
    type: CREATE_NEW_LIST,
    id: id
  };
};

export default createNewList;
