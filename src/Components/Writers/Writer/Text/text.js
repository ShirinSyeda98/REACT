import React, { useState, useEffect } from 'react'

const Text = (props) => {
  const [text, setText] = useState('')

  useEffect(() => {
    const text = props.texts.find(({ id }) => id === props.match.params.textId)
    setText(text)
  }, [props.texts, props.match.params.textId])

  return (
    <div>
      {text && (
        <React.Fragment>
          <h3>{text.title}</h3>
          <h4>{text.published}</h4>
          <p>{text.description}</p>
        </React.Fragment>
      )}
    </div>
  )
}

export default Text
