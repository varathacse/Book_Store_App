import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./Book";
import ViewBook from "./ViewBook";
import CreateBook from "./CreateBook";
import UpdateBook from "./UpdateBook";
import UpdateAuthor from "./UpdateAuthor";
import Header from "./Header";
import SearchBook from "./SearchBook";
import Logout from "./Logout";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";


function WebPath() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/book" element={<HomePage />} />
        <Route path="/allbooks" element={<Book />} />
        <Route path="/view-book/:id" element={<ViewBook />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/update-book/:id" element={<UpdateBook />} />
        <Route path="/update-author/:id" element={<UpdateAuthor />} />
        <Route path="/search-book" element={<SearchBook />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
    
      </Routes>
    </div>
  );
}

export default WebPath;
