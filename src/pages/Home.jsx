import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        
       <h2> This is Home </h2>
       <h2>    <Link to='About'>About</Link></h2>
        </div>
  )
}

export default Home