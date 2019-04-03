import React from 'react'

function Colums() {
    const items = [
        {
            'id':1,
            'title':'Pedro'
        },
        {
            'id':2,
            'title':'Tavares'
        },
    ]
  return (
    <React.Fragment>
        {
            items.map( item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>Pedro</td>
      
    </React.Fragment>
  )
}

export default Colums
