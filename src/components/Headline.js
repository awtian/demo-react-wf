import React, { Fragment } from 'react'
import context from '../context'

const Headline = (props) => {
  return (
    <Fragment>
      {
        props.children
      }
      <h1>ini dari component</h1>
      <context.Consumer>
        {
          ({theme}) => (
            <h1>{theme}</h1>
          )
        }
      </context.Consumer>
    </Fragment>
  );
}

export default Headline;