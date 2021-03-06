import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Good bye'
    //    })
    // }
    clickHandler = () => {
        this.setState({
            message: 'GoodBye'
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>Click event</button>*/}
        {/*<button onClick={() => this.clickHandler()}>Click event</button>*/}
        <button onClick={this.clickHandler}>Click event</button>
      </div>
    )
  }
}

export default EventBind
