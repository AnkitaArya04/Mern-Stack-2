import React , {useEffect} from 'react'

const Navbar = ({color}) => {

    //case 1:run on every render
    useEffect(()=>{
        alert("Hey i wil run on avery render")
    })

    //case 2:run only on first render
    useEffect(()=>{
        alert("hey welcome to my page this is the first render")
    },[])

    //case 3:run only when certain values change
    useEffect(()=>{
        alert("hey i am running because color was changed")
    },[color])

    //example of clean up function
    useEffect(()=>{
        alert("hey welcome to my page this is the first render of app.jsx")
        return ()=>{
          alert("component was unmounted")
        }
    },[])



  return (
    <div>
      I am navbar of {color} hehe...
    </div>
  )
}

export default Navbar
