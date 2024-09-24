
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Appointment from "./Pages/Appointment.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Register from "./Pages/Register.jsx";
import { ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Login from "./Pages/Login.jsx";
import { useContext, useEffect } from "react";
import { Context } from "./main.jsx";
import axios from "axios";
import Footer from "./components/Footer.jsx";
import Neurology from "./Pages/Neurology.jsx"

const App = () => {
 const {isAuthenticated , setIsAuthenticated,setUser} = useContext(Context);
 useEffect(()=>{
  const fetchUser = async()=>{
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/patient/me" ,
     {withCredentials:true});
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setUser({});
    }
  };
  fetchUser()
 },[isAuthenticated]);
 
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/neurology" elements={<Neurology />}/>
        </Routes>
        <Footer/>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
