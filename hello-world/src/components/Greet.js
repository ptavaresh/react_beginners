import React from 'react'

// function Greet(){
//     return <h1> HelloPedro</h1>
// }

export const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello { props.name } you are { props.heroName }
            </h1>
            {props.children}
        </div>
    )
}

export default Greet  // we are allowing to export this component