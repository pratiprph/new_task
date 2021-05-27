import React, { useEffect, useRef } from "react";
import { Element, Editor, Frame, useNode, useEditor } from "@craftjs/core";

import {MyButton} from './components/MyButton';


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
          <button ref={(dom) => create(dom, <MyButton  text="Hi"/>)}>
            Button Element
          </button>
        </div>
      );
    };

export default Toolbar;