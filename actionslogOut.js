import { LOG_OUT } from "../constants/constants.js";

const logOut = id => {
  return {
    type: LOG_OUT,
    id: id
  };
};

export default logOut;
