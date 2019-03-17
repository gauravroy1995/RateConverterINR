import React from "react";

const Rate = props => {
  const ratecallhandler = e => {
    props.ratecall(e.target.value);
  };
  return (
    <div>
      Rate:
      <input value={props.rate} onChange={ratecallhandler} />
    </div>
  );
};

export default Rate;
