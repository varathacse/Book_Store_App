import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      Navigate("/user/logout");
    }, 1000);
  }, []);

  return (
    <div>
      ErrorPage.............
      <br /> Login Again Please...........
    </div>
  );
};

export default ErrorPage;
