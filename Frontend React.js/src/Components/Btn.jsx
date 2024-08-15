import React from "react";
import { useNavigate } from "react-router-dom";

const Btn = () => {
  let Navigate=useNavigate();
  return (
    <div id="butt">
      <button onClick={()=>{Navigate("/user/logout")}}>Logout
      </button>
    </div>
  );
};

export default Btn;
