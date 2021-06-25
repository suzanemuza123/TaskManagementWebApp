import { connect } from "react-redux";
import createContact from "../components/Createcontact.jsx";
import deletebutton from "../components/deletebutton.jsx";
import markAsComplete from "../components/markAsComplete.jsx";
import showActive from "../components/showActive.jsx";
import showAll from "../components/showAll.jsx";
import showCompleted from "../components/showCompleted.jsx";
import submitbutton from "../components/submitbutton.jsx";
import todos from "../components/todos.jsx";

const mapStateToProps = state => {
  return {
    startANewTask: state.startANewTask,
    startedTasks: state.startedTasks
  };
};

export default CreateNewListcontainer;
