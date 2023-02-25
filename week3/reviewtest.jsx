import React,{useState} from 'react'

function Reviewtest() {
const [count,setupdate] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setupdate(count+1)}>increment</button>
    </div>
  )
}

export default Reviewtest