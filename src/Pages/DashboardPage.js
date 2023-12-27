import React, { createContext, useContext, useState } from 'react'
import { FetchedContext } from '../context/FetchedContext';
import DashNav from '../components/Dashboard/DashNav';
import DashboardContainer from '../components/Dashboard/DashboardContainer';
import TasksContainer from '../components/Dashboard/TasksContainer';
import "./DashboardPage.css"
export const DashContext = createContext();

const DashboardPage = () => {
  const[isDash,setIsDash] = useState(true);
  const {task} = useContext(FetchedContext);
  return (
    <div className='flex flex-col justify-center items-center'>
      <DashContext.Provider value={{isDash,setIsDash}}>
        <div className="dashboard-page">
          <DashNav/>
          <div className="dash-container-content">
            {
              isDash ? <DashboardContainer/> : <TasksContainer/>
            }
          </div>
        </div>
      </DashContext.Provider>
    </div>
  )
}

export default DashboardPage