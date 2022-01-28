import React from 'react'
import { Flag, Segment } from 'semantic-ui-react'

function App() {
  return (
      <div id="app-root">
        <h1>Browser Extension - Content Script</h1>
        <Segment>
          <Flag name='ae' />
          <Flag name='france' />
          <Flag name='myanmar' />
        </Segment>
      </div>
  )
}

export default App
