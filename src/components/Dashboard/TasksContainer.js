import React, { useContext, useState } from 'react'
import { FetchedContext } from '../../context/FetchedContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import plus from "../../assets/svg/plus.svg";
import "./TaskContainer.css";
import Task from './Task';
import Description from './Description';
import AddTaskBox from './AddTaskBox';
import EditBox from './EditBox';
const TasksContainer = () => {

  const [taskBox,setTaskBox] = useState(false);
  const [taskStatus,setTaskStatus] = useState("all");

  // accessing data from FetchedContext
  const {tasks,isDescriptionOpen} = useContext(FetchedContext);
  console.log(tasks);
  // setting up Filter Task Category for work events school

  const [filterTaskCategory, setFilterTaskCategory] = useState("all");
  const [taskCategoryBox, setTaskCategoryBox] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: "",
    date: "",
    time: "",
    desc: "",
    category: "",
    alert: false,
  });

  const editTaskBox = (id) => {
    setEditBox(!editBox);
    const editAbleTask = tasks.find((task) => task.id === id);
    setEditData(editAbleTask)
  };
  const editBoxProps = {
    editData,
    setEditData,
    editBox,
    setEditBox,
  };

  const [searchInput, setSearchInput] = useState("");
  const [searchedTask, setSearchedTask] = useState(null);

  const handleSearch = (event) => {
    let search = event.target.value;
    if(search === ""){
      setSearchedTask(null);
      setTaskStatus("all");
      setFilterTaskCategory("all");
    } else {
      const regex = new RegExp(search,"i");
      const searchedTasks = tasks.filter((task) => regex.exec(task.title))
      setSearchedTask(searchedTasks);
      setTaskStatus("all");
      setFilterTaskCategory("all");
    }
    
  };

  let date = new Date();
  let monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let month = monthsName[monthIndex];
  let year = date.getFullYear();

  const settingCategory = (category) => {
    setSearchedTask(null);
    setTaskStatus("all");
    setFilterTaskCategory(category);    
  };
  const settingStatus = (status) => {
    setSearchedTask(null);
    setTaskStatus(status);
    setFilterTaskCategory("all");    
  };

  return (
    <div className="tasks-main-container lg:max-w-[60%]">
    {/* category box */}
      <FontAwesomeIcon icon = {faEllipsisVertical}
        className='three-dot-menu' onClick={()=>{setTaskCategoryBox(true)}} />

        {taskCategoryBox && (
          <div className='task-category-background' 
            onClick={() => {setTaskCategoryBox(false)}}>
            
            <div className='tasks-category'>

              <div className={`tasks-category-item ${
                filterTaskCategory === "All" ? "active-item" : ""
              }`}
              onClick={()=>{settingCategory("all")}}>
                All
              </div>
              
              <div className={`tasks-category-item ${
                filterTaskCategory === "Personal" ? "active-item" : ""
              }`}
              onClick={()=>{settingCategory("Personal")}}>
                Personal
              </div>

              <div className={`tasks-category-item ${
                filterTaskCategory === "Work" ? "active-item" : ""
              }`}
              onClick={()=>{settingCategory("Work")}}>
                Work
              </div>

              <div className={`tasks-category-item ${
                filterTaskCategory === "School" ? "active-item" : ""
              }`}
              onClick={()=>{settingCategory("School")}}>
                School
              </div>

              <div className={`tasks-category-item ${
                filterTaskCategory === "Events" ? "active-item" : ""
              }`}
              onClick={()=>{settingCategory("Events")}}>
                Events
              </div>

            </div>

          </div>
        )}

        {/* Heading */}
        <div className='heading'>
          <div className='heading-tasks'>Tasks</div>
          <div className='date'>
            {month} {day}, {year}
          </div>
        </div>

        {/* Search bar */}
        <div className='search-container'>
          <input type='text' placeholder='Search' value={searchInput}
            className='search-bar' name='searchbox'
            onChange={(event)=>{
              setSearchInput(event.target.value);
              handleSearch(event);
            }}
          />
          <input value="Search" type="button" className="text-search-btn" />
        </div>

        {/* Filtering options */}
        <div className='container-header'>
          <div className='pen-comp-toggler'>

            <div className={`all-btn ${taskStatus === "all" ? "active-item" : ""}`}
              onClick={() => {
                settingStatus("all");
              }}>
              All
            </div>

            <div className={`pending-btn ${taskStatus === "pending" ? "active-item" : ""}`}
              onClick={() => {
                settingStatus("pending");
              }}>
              Pending
            </div>

            <div className={`complete-btn ${taskStatus === "completed" ? "active-item" : ""}`}
              onClick={() => {
                settingStatus("completed");
              }}>
              Completed
            </div>
          </div>
        </div>

        {/* render Task */}
        <div className='tasks-container '>
          {
            searchedTask ?
            searchedTask.map((task)=>(
              <Task key={task.id} value={task} editTaskBox={editTaskBox} />
            ))
            : taskStatus === "pending" ? 
            tasks.filter((task) => taskStatus === "pending" && !task.completed)
            .map((task) => (
              <Task key={task.id} value={task} editTaskBox={editTaskBox} /> 
            ))
            : taskStatus === "completed" ? 
            tasks.filter((task)=> taskStatus === "completed" && task.completed)
            .map((task)=>(
              <Task key={task.id} value={task} editTaskBox={editTaskBox}/>
            ))
            : filterTaskCategory !== "all" ? 
            tasks.filter((task) => task.category === filterTaskCategory)
            .map((task) => (
              <Task key={task.id} value={task} editTaskBox={editTaskBox} />
            ))
            : tasks.map((task) => (
              <Task key={task.id} value={task} editTaskBox={editTaskBox}/>
            ))
          }
        </div>

        {/* Add button */}
        <div className="add-tasks" onClick={()=>{setTaskBox(!taskBox)}}>
          <img src={plus} alt="" />
        </div>

        {/* Rendering Boxes */}
      {taskBox && <AddTaskBox taskBox={taskBox} setTaskBox={setTaskBox} />}
      {editBox && <EditBox {...editBoxProps} />}
      {isDescriptionOpen && <Description editTaskBox={editTaskBox} />}

    </div>
  )
}

export default TasksContainer