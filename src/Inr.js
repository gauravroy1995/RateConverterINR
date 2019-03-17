import React from "react";

const Inr = props => {
  const inrcallhandler = e => {
    props.inrcall(e.target.value);
  };
  return (
    <div>
      INR:
      <input value={props.inr} onChange={inrcallhandler} />
    </div>
  );
};

export default Inr;
