import React, { Component } from 'react'

class LifecicleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Pedro'
    }
    console.log('Lifecicle B constructor')
  }
  
static getDerivedStateFromProps(props, state) {
    console.log('lifecycleB getDerivedstatefromprops')
    return null
}

componentDidMount() {
    console.log('LifecicleB component did mount')
}
shouldComponentUpdate() {
    console.log('lifecycleB shouldComponentUpdate')
    return true
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getSnapshotBeforeUpdate')
    return null
  }
  
  componentDidUpdate() {
    console.log('LifeCycleB componentDidUpdate')
  }

  render() {
    console.log('Lifecicle B render')
    return (
      <div>
        Life cycle B
      </div>
    )
  }
}

export default LifecicleB
