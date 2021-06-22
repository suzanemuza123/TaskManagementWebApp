import React from "react";
import CreateContactcontainer from "../containers/CreateContactcontainer.js";
import todoscontainer from "../containers/todoscontainer.js";
import logout from "./logout.jsx"


const Home = () => {
  var style = {
    display: "flex",
    alignContent: "space-around",
    justifyContent: "center",
    flexwrap: "wrap",
    width: 700,
    height: 550,
    backgroundColor: "dark blue"
  };
  return (
    <div style={style}>
      <CreateContactcontainer />
      <todoscontainer />
      <logout />
    </div>
  );
};

export default Home;
