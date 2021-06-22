import { SHOW_ACTIVE } from "../constants/constants.js";

const showActive = id => {
  return {
    type: SHOW_ACTIVE,
    id: id
  };
};

export default showActive;
