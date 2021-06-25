import { connect } from "react-redux";
import Home from "../components/Home.jsx";
import todos from "../components/todos.jsx";
import CreateContact from "../components/Createcontact.jsx";

const mapStateToProps = state => {
  return {
    startANewTask: state.startANewTask,
    startedTasks: state.startedTasks
  };
};

export default submitbuttoncontainer;
