import { SIGN_IN } from "../constants/constants.js";

const signIn = id => {
  return {
    type: SIGN_IN,
    id: id
  };
};

export default signIn;
