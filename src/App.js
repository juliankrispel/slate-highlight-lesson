import React, { useState } from 'react'
import './App.css'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'

const initialValue = Plain.deserialize('Hello World')

function App() {
  const [value, setValue] = useState(initialValue)
  return <div className="App">
    <Editor
      value={value}
      onKeyDown={(event, editor, next) => {
        if (event.key === 'h' && event.metaKey === true) {
          event.preventDefault()
          editor.toggleMark('highlight')
        } else {
          return next()
        }
      }}

      renderMark={(props, editor, next) => {
        console.log('yo', props)
        if (props.mark.type === 'highlight') {
          return <span style={{ background: 'lightblue' }} {...props.attributes}>
            {props.children}
          </span>
        } else {
          return next()
        }
      }}

      onChange={(change) => {
        setValue(change.value)
      }}
    />
  </div>
}

export default App
