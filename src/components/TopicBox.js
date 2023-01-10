import React from 'react'
import './topicBox.css'

export default function TopicBox(props) {
    
  return (
    <div>
      <div className="topicBox">
        <span className='text'>
            My favourite food is {props.food} is prices are {props.price}
        </span> <br />
        {props.children}
      </div>
    </div>
  )
}
