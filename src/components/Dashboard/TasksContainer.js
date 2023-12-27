import React, { useContext, useState } from 'react'
import { FetchedContext } from '../../context/FetchedContext';

const TasksContainer = () => {

  const [taskBox,setTaskBox] = useState(false);
  const [taskStatus,setTaskStatus] = useState("all");

  // accessing data from FetchedContext
  const {tasks,isDescriptionOpen} = useContext(FetchedContext);

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
    const editAbleTask = tasks.find((task) => task.is === id);
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
    } else {
      const regex = new RegExp(search,"i");
      const searchedTasks = tasks.filter((task) => regex.exec(task.title))
      setSearchedTask(searchedTasks);
    }
    setTaskStatus("all");
    setFilterTaskCategory("all");
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
    <div>TasksContainer</div>
  )
}

export default TasksContainer