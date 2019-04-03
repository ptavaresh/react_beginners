import React, { Component } from 'react'

//Class component
class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return <h1>Wellcome {name}</h1>
    }
}

export default Welcome