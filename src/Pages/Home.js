import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="wel-heading">
        Now You can Manage Your 
        <span> Daily Tasks</span>
      </h1>

      <blockquote className="wel-quote mb-5">NEVER FINISHED:
            UNSHACKLE YOUR MIND AND WIN THE WAR WITHIN</blockquote>

      
      <Link  to='/dashboard'>
        <button className="button-85"
        >Get Started</button>
       </Link>

    </div>
  )
}

export default Home