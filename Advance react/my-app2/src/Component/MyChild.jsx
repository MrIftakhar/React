import React from 'react';

const MyChild = (props) => {
    props.OnMethod("Hello")
  return (
    <div>
        <p>MyChild</p>
        <p>{props.Title}</p>
    </div>
  )
}

export default MyChild