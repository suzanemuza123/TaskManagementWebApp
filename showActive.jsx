import React from "react";

const showActive = props => {
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
        }
        onClick={() =
        props .onAdd(props.id)
        }
        style={style}
      >
        {props.id}
      </button>
    </div>
  );
};

export default showActive;
