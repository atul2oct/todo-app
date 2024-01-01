import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export const FetchedContext = createContext();

export default function FetchedContextProvider({children}){
    // for spinner
    const[loading,setLoading]=useState(false);
    // task setting
    const [tasks,setTasks]=useState([]);
    // for redering task
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [descriptionData, setDescriptionData] = useState({});

    // Showing UserAccount and Notification
    const [openUserAccount, setOpenUserAccount] = useState(false);

    // Setting Data to Local Storage
    const setDataToLocalStorage = (data) => {
        localStorage.setItem("tasks", JSON.stringify(data));
    };

    async function fetchData(){
        setLoading(true);
        let url="https://jsonplaceholder.typicode.com/todos";
        try{
            const data = await axios.get(url);
            setTasks(data.data);
            setDataToLocalStorage(data.data);
        }
        catch(error){
            notify("Error Fetching Tasks from API!", "error")
            console.log("Error Fetching Tasks!", error);
        }
        setLoading(false);
    }

    // Deleteing Task
    const deleteTask = async (id) => {
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let updatedTask = tasks.filter((task)=>task.id !== id);
            localStorage.setItem("tasks", JSON.stringify(updatedTask));
            setTasks(JSON.parse(localStorage.getItem('tasks')));
            notify("Task Deleted SuccessFully!","success")
            isDescriptionOpen && setIsDescriptionOpen(false);
        }
        catch(error){
            // Handle errors
            console.error('Error deleting task:', error.message);
            notify("Failed to delete task", "error");
        }
    }

    // function to show description
    const showDescription = (id) => {
        setIsDescriptionOpen(!isDescriptionOpen);
        const updatedDesc = tasks.find((task)=> task.id === id);
        setDescriptionData(updatedDesc);
    }

    // Configured Notification
    const notify = (msg,type) => {
        if(type==="success"){
          toast.success(msg);
        }else{
          toast.error(msg);
        }
      }


    const value = {
        tasks,
        setTasks,
        deleteTask,
        isDescriptionOpen, 
        setIsDescriptionOpen,
        showDescription,
        descriptionData,
        setDescriptionData,
        notify,
        openUserAccount,
        setOpenUserAccount,
        fetchData
      }
    return <FetchedContext.Provider value={value} >
        {children}
    </FetchedContext.Provider>
}