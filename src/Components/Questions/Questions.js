import React from 'react'
import './Questions.css'

function Questions() {
  return (
      <div className='question-container'>
          <h4>1. How React Works?</h4>
          <p><span>Ans:</span> React is a javascript library. At the heart of react is component. Every react app has one component which is root component. React receive jsx file and it converts it to javascript file so that brawser can read and display the data. Reacts virtual DOM is way faster than normal js DOM. React works in declarative code. </p>
          <h4>2. What is the difference between props and state?</h4>
          <p><span>Ans:</span> props are used to pass data from one component to another component.Props are read only.Props can be accessed by the child component.Props are external and controlled by whatever renders the component. The state is a local data storage that is local to the component only and can not be passed to their component. States can be used for rendering dynamic changes with the compone. State holds information about the components.</p>
    </div>
  )
}

export default Questions