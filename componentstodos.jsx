import React from "react";
import CreateNewListcontainer from "../containers/CreateNewListcontainer.js";
import submitbuttoncontainer from "../containers/submitbuttoncontainer.js";
import deletelistcontainer from "../containers/deletelistcontainer.js";

const todos = () => {
  var style = {
    display: "flex",
    height: 500,
    minWidth: 880,
    backgroundColor: "dark blue"
  };
  return (
    <div>
      <CreateNewListcontainer />
      <submitbuttoncontainer />
      <deletelistcontainer />
    </div>
    
    
  );
};

export default todos;
