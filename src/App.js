import React, { useEffect, useRef } from "react";
import { Element, Editor, Frame, useNode, useEditor } from "@craftjs/core";

export const MyButton = (props) => {
  const {
    connectors: { connect, drag }
  } = useNode();

  const { text } = props;

  return <button ref={(ref) => connect(drag(ref))}>{text}</button>;
};

export const MyButton2 = (props) => {
  const {
    connectors: { connect, drag }
  } = useNode();

  const { text } = props;

  return <button ref={(ref) => connect(drag(ref))}>{text}</button>;
};

const Toolbar = () => {
  const {
    connectors: { create },
    indicator,
    query,
    actions
  } = useEditor((state) => ({
    indicator: state.events.indicator
  }));

  const indicatorRef = useRef(indicator);

  useEffect(() => {
    const currentIndicator = indicatorRef.current;

    if (indicator && !currentIndicator) {
      indicatorRef.current = indicator;
    }

    if (!indicator && currentIndicator) {
      const {
        placement: { index, parent, where }
      } = currentIndicator;
      const newIndex = index + (where === "after" ? 0 : -1);
      const droppedNodeId = parent.data.nodes[newIndex];

      console.log(newIndex);
      actions.selectNode(droppedNodeId);
    }
  }, [indicator, actions, query]);

  return (
    <div>
      <button ref={(dom) => create(dom)}>
        Drop
      </button>
      <button ref={(dom) => create(dom, <MyButton text="Hello" />)}>
        Crop
      </button>
    </div>
  );
};
export default function App() {
  
  return (
    <React.StrictMode>
      <Editor
        resolver={{ MyButton,MyButton2 }}
       
      >
        <Toolbar />
        <Frame>
          <Element is="div" canvas style={{width:"200px",height:"100px",border:"1px solid red"}}>
            {/* <MyButton text="click me #1" /> */}
            
          </Element>
        </Frame>
      </Editor>
    </React.StrictMode>
  );
}
