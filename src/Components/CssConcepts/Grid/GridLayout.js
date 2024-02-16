import React from 'react'
import './GridLayout.css'
export default function GridLayout() {
  return (
    <div className='layout'>
        <div className='header'>
            <p>name</p>
            <p>place</p>
            <p>dob</p>
        </div>
        <div className='sidebar'>
            <p>this is the sidebar</p>
        </div>
        <div className='content'>
            <h1>this is the body</h1>
            <p>Execute the statement lorem-ipsum [count] [units] from your terminal to generate a passage of lorem ipsum text. You can additional arguments to the program</p>
        </div>
        <div className='footer'>
            <p>instagram</p>
            <p>facebook</p>
            <p>snapchart</p>
        </div>
    </div>
  )
}
