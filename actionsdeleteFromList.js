import { DELETE_FROM_LIST } from "../constants/constants.js";

const deleteList = id => {
  return {
    type: DELETE_FROM_LIST,
    id: id
  };
};

export default deleteFromList;
