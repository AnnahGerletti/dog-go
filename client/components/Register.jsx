import React from 'react'
import {Link} from 'react-router-dom'


export default function walkerOwner(){
  // handleClickWalker(event){
  //   document.location='/#/register/walker'
  // }
  //
  // handleClickOwner(event){
  //   document.location='/#/register/owner'
  // }

  return (
    <div>
      <div className='walkerButton'>
        <Link to='/register/walker'>Walker</Link>
      </div>
      <div className='ownerButton'>
        <Link to='/register/owner'>Owner</Link>
      </div>
    </div>
  )
}


//can't add a link to a button
//can create a function that handels the click. if so then need to tell the difference between clicking owners or walkers button.
//can you have the handelClick within the Button <div>??
//should they be hyper links <a>??
