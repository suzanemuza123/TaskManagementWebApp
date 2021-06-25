import { connect } from "react-redux";
import createContact from "../components/Createcontact.jsx";
import submitbutton from "../components/submitbutton.jsx";
import deletebutton from "../components/deletebutton.jsx";

const mapStateToProps = state => {
  return {
    startANewTask: state.startANewTask,
    startedTasks: state.startedTasks

  };
};

export default CreateContactcontainer;
