import React, { Fragment, useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Text from './Text/text'

const Writert = (props) => {
  const [writer, setWriter] = useState('')

  useEffect(() => {
    const writer = props.writers.find((writer) => {
      return writer.id === props.match.params.writerId;
    });
    console.log(props.match.params);
    setWriter(writer)
  }, [props.match.params, props.writers])

  return (
    writer ? <Fragment>
      <h2>{writer.name}</h2>
      <h3>{writer.birth}</h3>
      <p>{writer.description}</p>
      <ul>
        {writer.texts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${props.match.url}/texts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Route
        path={`${props.match.url}/texts/:textId`}
        exact
        render={props => <Text {...props} texts={writer.texts} />}
      /> 
    </Fragment> : ''
  )
}

export default Writert
