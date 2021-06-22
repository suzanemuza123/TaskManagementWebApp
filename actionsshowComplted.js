import { SHOW_COMPLETED } from "../constants/constants.js";

const showCompleted = id => {
  return {
    type: SHOW_COMPLETED,
    id: id
  };
};

export default showCompleted;
