import React from 'react'
import context from '../context'

const Button = () => {
  return (
    <context.Consumer>
      {
        ({ganti}) => (
          <button onClick={ganti}>Ganti Theme</button>
        )
      }
    </context.Consumer>
  );
}

export default Button;