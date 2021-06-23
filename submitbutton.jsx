import React from "react";

const submitbutton = props => {
  var style = {
    width: 80,
    height: 80
    
  };
  return (
    <div>
      <button
        disabled={
          props.createNewList === null ||
          props.createTask[props.createNewList] === false
          props.Createcontact === null ||
          props.Startcontact[props.Createcontact] === false
        }
        onClick={() =>
          props.onAdd(props.id)
        }
        style={style}
      >
        {props.id}
      </button>
    </div>
  );
};

export default submitbutton;
