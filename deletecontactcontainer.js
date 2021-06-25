import { connect } from "react-redux";
import Home from "../components/Home.jsx";
import Createcontact "../components/Createcontact.jsx";

const mapStateToProps = state => {
  return {
    startANewTask: state.startANewTask,
    startedTasks: state.startedTasks
  };
};

export default deletecontactcontainer;
