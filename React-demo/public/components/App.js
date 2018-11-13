import React from 'react'

// 组件
import Hello from './fnRend'
import Life from './life'
import Exa from './example'

class App extends React.Component {
   render() {
      return (
         <div className="app" id="appX">
            Hello World!
            <Hello color="red" date={ new Date }/>
            <Life/>
            <Exa/>
         </div>
      )
   }
}

export default App
