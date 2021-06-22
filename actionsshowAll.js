import { SHOW_ALL } from "../constants/constants.js";

const showAll = id => {
  return {
    type: SHOW_ALL,
    id: id
  };
};

export default showAll;
