import React, { useContext, useState } from 'react'
import { UserContext } from './App'

export default function Login() {
    const [value,setValue] =useState("")
    const {user,setUser} =useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault();
        setUser(value)
    }
    console.log(value)
    console.log(user)
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) =>setValue(e.target.value)} />
        <button type="submit">Login</button>
    </form>
    </div>
  )
}
