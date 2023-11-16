import React,{useState} from 'react'

export default function Extra() {
    const[mode, setMode]=useState({
        color: 'black',
        backgroundColor:'white'
    })
    const changemode = ()=>{
        if(mode.color==='black')
        {
            setMode({
                color:'White',
                backgroundColor:'black'
            })
            console.log("Dark mode")
        }
        else
        {
            setMode({
                color:'black',
                backgroundColor:'white'
            })
        console.log("Light mode")
        }     
    }
  return (
    <div style={mode}>
      <h2> Heading</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit corporis laudantium harum sequi omnis ullam ex consequatur neque, cum, officiis, qui ipsam minima assumenda! Rerum adipisci accusamus ad vitae!20</p>
      <input type="checkbox" onChange={changemode} />
    </div>
  )
}

// import React from 'react'

// export default function Extra() {
//   return (
//     <div className="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//   <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
//   )
// }
