import React from "react";
import { useNode } from "@craftjs/core"

export const MyButton = (props) => {
    const {
      connectors: { connect, drag }
    } = useNode();
  
    const { text } = props;
  
    return <button ref={(ref) => connect(drag(ref))}>{text}</button>;
  };