import React from "react";

const Usd = props => {
  const usdcallhandler = e => {
    props.usdcall(e.target.value);
  };
  return (
    <div>
      USD:
      <input value={props.usd} onChange={usdcallhandler} />
    </div>
  );
};

export default Usd;
