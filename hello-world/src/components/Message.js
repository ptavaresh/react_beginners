import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
  }

  changeMessage() {
    this.setState({//Set a new state
      message: 'Thank you for subscribing!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button> {/*Add the changeMessage function in the buton*/}
      </div>
    )
  }
}

export default Message