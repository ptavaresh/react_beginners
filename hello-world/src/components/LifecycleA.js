import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecicleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Pedro'
    }
    console.log('Lifecicle A constructor')
  }
  
static getDerivedStateFromProps(props, state) {
    console.log('lifecycleA getDerivedstatefromprops')
    return null
}

componentDidMount() {
  console.log('lifecycleA component did mount')
}

shouldComponentUpdate() {
  console.log('lifecycleA shouldComponentUpdate')
  return true
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('LifeCycleA getSnapshotBeforeUpdate')
  return null
}

componentDidUpdate() {
  console.log('LifeCycleA componentDidUpdate')
}

changeState = () => {
  this.setState({
    name:'Codevolution'
  })
}
  render() {
    console.log('Lifecicle A render')
    return (
      <div>
        <div>Life cycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>    
    )
  }
}

export default LifecicleA
