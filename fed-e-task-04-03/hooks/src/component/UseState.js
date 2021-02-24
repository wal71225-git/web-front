import React, { useState } from 'react'
function TestState() {
  // useState是异步的
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({name: '张三', age: 20})
  return (
  <div>
    <span>{count}</span>
    <button onClick={()=>setCount( count + 1 )}>+1</button>
    <span>{person.name}{person.age}</span>
    <button onClick={()=> setPerson({...person, name: '李四'})}>setPerson</button>
  </div>
  )
}
export default TestState