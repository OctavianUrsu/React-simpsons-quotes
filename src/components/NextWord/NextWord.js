import React from "react";

const nextWord = props => {
  return (
    <div>
      <button
        className="btn btn-outline-danger btn-sm responsiveButton"
        disabled={props.disabled}
        onClick={props.bgColor}
      >
        Next quote (press →)
      </button>
    </div>
  );
};

export default nextWord;
