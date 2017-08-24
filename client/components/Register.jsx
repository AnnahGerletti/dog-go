import React from 'react'
import {Link} from 'react-router-dom'

export default function walkerOwner(){
  return (
    <div>
      <div className='walkerButton'>
        <button id='walkerButton'><Link to='/register/walker'>Walker</Link></button>
      </div>
      <div className='ownerButton'>
        <button id='ownerButton'><Link to='/register/owner'>Owner</Link></button>
      </div>
    </div>
  )
}
