import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id="Menu">
      <div>
        <Link to="/user/allbooks">All Books</Link>
      </div>
      <div>
        <Link to="/user/search-book">Search Book</Link>
      </div>
      <div>
        <Link to="/user/create-book">Add Book</Link>
      </div>
    
      
    </div>
  );
};

export default Menu;
