import React, { useContext } from 'react'
import { DashContext } from '../../Pages/DashboardPage';
import "./DashNav.css"
const DashNav = () => {
    const {isDash,setIsDash} = useContext(DashContext);

    const dashClick = ()=>{
        setIsDash(true);
    }
    const taskClick = ()=>{
        setIsDash(false);
    }
  return (
    <div className="dash-tasks-togg">
        <div className={`dash-tog-btn dash-btn ${isDash?"active-toggle" : ""}`} onClick={dashClick}>
            Dashboard
        </div>
        <div className={`dash-tog-btn tasks-btn ${isDash? "": "active-toggle"}`} onClick={taskClick}>
            Task
        </div>

    </div>
  )
}

export default DashNav