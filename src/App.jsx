import { useContext, useEffect } from "react";
import { FetchedContext } from "./context/FetchedContext";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DashboardPage from "./Pages/DashboardPage";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  const {fetchData,setTasks} = useContext(FetchedContext);

  useEffect(() => {
    // Storing Task in LOcal storage, if Doesnt exists then creating
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    console.log("storedTasks")
    console.log(storedTasks)
    if (storedTasks && storedTasks.length>0) {
      setTasks(storedTasks);
    } else {
      fetchData();
    }
  },[]);

  return (
    <div className="w-screen h-screen flex flex-col 
    bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
      <div>
        <Navbar/>
      </div>
      <div className="h-[90%] flex flex-col ">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    );
}
