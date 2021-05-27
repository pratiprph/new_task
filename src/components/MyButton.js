import React from "react";
import { useNode } from "@craftjs/core"

 const MyButton = (props) => {
    const {
      connectors: { connect, drag },
      actions: {setProp}
    } = useNode();
  
    const { text } = props;
  
    return (
      <div>
    <button ref={(ref) => connect(drag(ref))}
    onClick={e => {
      setProp(props => {
        props.enabled = !props.enabled;
      });
    }}>{text}</button>
    
    <input type="text" value={text} onChange={e => {
      setProp(props => {
        props.text = e.target.value;
      }, 500);
    }} />
    </div>
    );
  };

  export default MyButton;