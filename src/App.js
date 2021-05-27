import React, { useEffect, useRef } from "react";
import { Element, Editor, Frame, useNode, useEditor } from "@craftjs/core";

import {MyButton} from './components/MyButton';
import  Toolbar  from './Toolbar';

export default function App() {
  return (
    <React.StrictMode>
      <Editor
        resolver={{ MyButton }}
        >
        <Toolbar />
        <Frame>
          <Element is="div"  canvas 
          style={{width:"200px",
          height:"100px",
          border:"1px solid red",
          position:"relative",
          float:"left"
          }}>
          </Element>
        </Frame>
      </Editor>
    </React.StrictMode>
  );
}
