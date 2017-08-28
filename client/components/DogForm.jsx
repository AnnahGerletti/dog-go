import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postDogDetails} from '../actions/register'

class DogForm extends React.Component {
  constructor (props){
    super(props)
    this.state={
      newDog: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    const newDog = this.state.newDog
    newDog[e.target.name] =e.target.value
    this.setState({
      newDog: newDog
    })
  }

  submitDog(e){
    e.preventDefault()
    this.props.dispatch(postDogDetails(this.state.newDog), () => document.location='/#/accounts')
  }

  render(){
    const{name, breed, age, colour}=this.state
    return(
      <div>
        <h1>Sign up your dog for future walks.</h1>
        <form className='dogForm'>
          <p><input name="name" placeholder='name' onChange={this.handleChange} value={name} /></p>
          <p><input name="breed" placeholder='breed' onChange={this.handleChange} value={breed} /></p>
          <p><input name="age" placeholder='age' onChange={this.handleChange} value={age} /></p>
          <p><input name="colour" placeholder='colour' onChange={this.handleChange} value={colour} /></p>
          <p><input type="submit" onClick={this.submitDog.bind(this)} /></p>
        </form>
        <Link to="/register">Cancel</Link>
      </div>
    )
  }
}


export default connect()(DogForm)
