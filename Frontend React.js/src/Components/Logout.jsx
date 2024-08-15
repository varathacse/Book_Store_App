import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let Navigate = useNavigate();
  
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTimeout(() => {
      Navigate("/login");
    }, 1000);
    
  }, []);
  return <div style={{textAlign:"center",fontSize:"20px"}} >Logout..........</div>;
};

export default Logout;
