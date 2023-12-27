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
      <div className="wel-quote">
      {`NEVER FINISHED:
            UNSHACKLE YOUR MIND AND WIN THE WAR WITHIN`}
      </div>
      <div className="responsive-img">
            
      </div>
      <Link className="sign-up-btn bg-gradient-to-r from-rose-400
       via-fuchsia-500 to-indigo-500" to='/dashboard'>Get Started</Link>

    </div>
  )
}

export default Home