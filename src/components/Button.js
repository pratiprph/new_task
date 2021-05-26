import React from "react";
import { useNode } from "@craftjs/core";


 const Button = ({label,color }) => {
  const { connectors: {connect, drag} } = useNode();
  return (
    <button className={`btn btn-${color}`}  ref={dom => connect(drag(dom))}>
      {label}
    </button>
  );
};

export default Button;

