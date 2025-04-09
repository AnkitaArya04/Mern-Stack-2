import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Ankita")
  const [form, setForm] = useState({})


  const handleClick=()=>{
    alert("Hey i am clicked")
  }
  const handleMouseOver=()=>{
    alert("Hey i am mouse over")
  }
  const handleChange=(e)=>{
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red
      </div> */}
    <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
    <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
