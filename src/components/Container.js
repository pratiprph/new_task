import React from 'react'
import TextComponent from './TextComponent'

import {useNode,Canvas} from "@craftjs/core";
const Container = () => {
  const { connectors: {drag} } = useNode();

  return (
    <div ref={drag} style={{width:"400px",height:"300px",border:"1px solid red"}}>
      <Canvas id="drop_section">
         
        <TextComponent />
      </Canvas>
    </div>
  )
}

export default Container;