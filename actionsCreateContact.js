import { CREATE_CONTACT } from "../constants/constants.js";

const createContact = (first name, last name, email, comments, id) => {
  return {
    type: CREATE_CONTACT,
    fieldId: id,
    item: {
      first name: first name,
      last name: last name,
      email: email,
      comments: comments
    }
  };
};

export default createContact;
