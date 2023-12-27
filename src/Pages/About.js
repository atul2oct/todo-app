import React from 'react'
import { BiSolidQuoteLeft,BiSolidQuoteRight } from "react-icons/bi";
import "./About.css"
const About = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-100 
    w-full h-full gap-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl'>GO <span className='text-cyan-700'>BEYOND LIMITS</span></h1>
        
        <BiSolidQuoteLeft />
          <blockquote className='text-2xl'>
            The pain that you are willing to endure is measured by how bad you want it.
           </blockquote>      
        <BiSolidQuoteRight/>
  
          <i className='text-lg text-gray-600'>-David Goggins</i>
      </div>
      
      <div className="about-container">
      <h2 className="sub-heading">Features That Make a Difference</h2>
      <p className="about-description">
        The app comes packed with features designed to simplify your task
        management:
      </p>

      <h3 className="feature-heading">1. Task Creation</h3>
      <p className="about-description">
        Easily create new tasks by providing essential details like titles,
        descriptions, due dates, and categories. Whether it's a work-related
        project or a personal goal, you can organize it all in one place.
      </p>

      <h3 className="feature-heading">2. Task Deletion</h3>
      <p className="about-description">
        Completed a task or decided it's no longer relevant? No problem.
        Deleting tasks is a breeze with just a click, allowing you to declutter
        your list effortlessly.
      </p>

      <h3 className="feature-heading">3. Task Editing</h3>
      <p className="about-description">
        Plans change, and so do tasks. The app lets you edit task details,
        ensuring that your list stays up-to-date and reflects your current
        priorities.
      </p>

      <h3 className="feature-heading">4. Task Alerts</h3>
      <p className="about-description">
        Never miss a deadline again. Set alerts for your tasks, and the app will
        remind you at just the right time. Say goodbye to that feeling of "I
        forgot something important!"
      </p>

      <h3 className="feature-heading">5. Search Tasks</h3>
      <p className="about-description">
        Search tasks with any keyword you dont need to type the whole word, just
        type 3-4 words and you will get the results.
      </p>

      <h3 className="feature-heading">6. Organised</h3>
      <p className="about-description">
        You can filter tasks as per your convienience
      </p>

      <h3 className="feature-heading">7. Dashboard and Pie Chart</h3>
      <p className="about-description">
        The dashboard provides a quick snapshot of your tasks completion status.
        Need a more visual representation? The pie chart gives you an
        at-a-glance view of your tasks by category.
      </p>
    </div>
    </div>
  )
}

export default About