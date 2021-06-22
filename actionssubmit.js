import { SUBMIT } from "../constants/constants.js";

const submit = id => {
  return {
    type: SUBMIT,
    id: id
  };
};

export default submit;
