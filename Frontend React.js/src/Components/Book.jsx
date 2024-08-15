import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import bookServices from "./BookService";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const [data, setData] = useState([]);
  let navigate=useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await bookServices.getBooks();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); 

  const viewBook = (id) => {
    navigate(`/user/view-book/${id}`);
  };
  

  return (
    <div className="book">
      {data.length === 0 ? (
        <p>No books available.</p>
      ) : (
        data.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => viewBook(book.id)}
          />
        ))
      )}
    </div>
  );
};

export default Book;
