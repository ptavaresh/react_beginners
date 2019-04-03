import React from 'react'

// function Greet(){
//     return <h1> HelloPedro</h1>
// }

export const Greet = (props) => {
    const {name, heroName} = props
    return (
        <div>
        <h1>
            Hello { name } you are { heroName }
        </h1>
        </div>
    )
}

export default Greet  // we are allowing to export this component