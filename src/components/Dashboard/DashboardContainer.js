import React, { useContext } from 'react'
import { FetchedContext } from '../../context/FetchedContext';
import PieChartComponent from './PieChartComponent';
import "./DashboardContainer.css"
const DashboardContainer = () => {
  const {tasks} = useContext(FetchedContext);


  let completed = tasks.filter(task => task.completed).length;
  let pending = tasks.filter(task => !task.completed).length;

  return (
    <div className="dashboard-container lg:max-w-[60%]" id="dash-container">

      <div className="dash-heading">
        <h2 className='h2'>Dashboard</h2>
        <p>See your overall performance</p>
      </div>

      <div className="status-container">

        <div className="total-tasks task-status">
          <h1>{tasks ? tasks.length : 0}</h1>
          <p>Total Tasks</p>
        </div>

        <div className="pending-tasks task-status">
          <h1>{pending}</h1>
          <p>Pending Tasks</p>
        </div>

        <div className="completed-tasks task-status">
          <h1>{completed}</h1>
          <p>Completed Tasks</p>
        </div>

      </div>

      <h2 className="chart-heading h2">Performance</h2>

      <PieChartComponent completed={completed} pending={pending}/>

    </div>
  )
}

export default DashboardContainer