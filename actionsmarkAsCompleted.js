import { MARK_AS_COMPLETE } from "../constants/constants.js";

const markAsComplete = id => {
  return {
    type: MARK_AS_COMPLETE,
    id: id
  };
};

export default markAsComplete;
