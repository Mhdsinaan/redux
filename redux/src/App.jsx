import React from 'react'
import { color } from './colorSlice'
import { useSelector,useDispatch } from 'react-redux'

function App() {
  const isBlack=useSelector((state)=>state.theme.isBlack)
  const dispatch=useDispatch()
  return (
    
    <div style={{backgroundColor:isBlack?"red":'blue', height:"100vh"}}>
      <button onClick={()=>dispatch(color())}>tooggle</button>
    </div>
  )
}

export default App
