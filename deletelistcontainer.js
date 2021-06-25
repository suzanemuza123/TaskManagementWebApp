import { connect } from "react-redux";
import todos from "../components/todos.jsx";
import Home from "../components/Home.jsx";
import deletecontactcontainer from "./deletecontactcontainer.js";

const mapStateToProps = state => {
  return {
    startANewTask: state.startANewTask,
    startedTasks: state.startedTasks
  };
};

export default deletecontactcontainer;
