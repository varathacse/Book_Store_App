import React from "react";
import bookimg from "./../assets/book1.jpg";

const BookCard = ({ book, onClick }) => {
  const buttonStyle = {
    border: "none",
    margin:"0",
    backgroundColor: "transparent",
    alignItems: "center",
    cursor: "pointer",
    color:"Blue"
  };

  return (
    <div className="bookCard" key={book.id}>
      <img src={bookimg} alt="Avatar" />
      <div className="bookDetails">
        <button onClick={onClick} style={buttonStyle}>
          {book.bookName}
        </button>
        <p>{book.edition}</p>
        <p>{book.yearOfPublish}</p>
        <p>
        {book.authors.map((a, i, authors) => (
                      <span key={a.id}>
                        {a.authorName}
                        {i + 1 === authors.length ? "" : ", "}
                      </span>
                    ))}
        </p>
        <p>{book.price}</p>
      </div>
    </div>
  );
};

export default BookCard;
