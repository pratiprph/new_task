import React from 'react';

import {useNode,Canvas} from "@craftjs/core";
import Button from './components/Button';
const Droppable = () => {
  const { connectors: {drag} } = useNode();

  return (
    <div ref={drag}>
      <Canvas id="drop_section">
         
        <Button/>
      </Canvas>
    </div>
  )
}

export default Droppable;
