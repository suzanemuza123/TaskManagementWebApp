import React from "react";
import submitbuttoncontainer from "../containers/submitbuttoncontainer.js";

const Createcontact = () => {
  var style = {
    display: "flex",
    height: 500,
    minWidth: 880
    backgroundColor: "dark blue"
  };
  return (
    <div style={style}>
      <submitbuttoncontainer first name= />
      <submitbuttoncontainer last name= />
      <submitbuttoncontainer email= />
      <submitbuttoncontainer comments= />
    </div>

  );
};

export default CreateContact;
