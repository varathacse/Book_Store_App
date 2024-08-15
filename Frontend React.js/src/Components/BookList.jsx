import React, { useEffect } from "react";
import bookServices from "./BookService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookList = (props) => {
  const { search } = props;

  const [books, setBooks] = useState([]);
  let Navigate = useNavigate();

  useEffect(() => {
    bookServices.getBooks().then((res) => {
      setBooks(res.data);
    });
  }, []);

  let deleteBook = (id) => {
    bookServices.deleteBookById(id).then(() => {
      alert("Deleted Successfully");
      Navigate(0);
    });
  };

  let filteredBooks = [];

  filteredBooks = books.filter((book) => {
    const bookNameMatch = book.bookName.toLowerCase().includes(search);
    const authorMatch = book.authors.some((a) =>
      a.authorName.toLowerCase().includes(search)
    );
    return bookNameMatch || authorMatch;
  });

  return (
    <div>
      <div className="main">
        <h2 className="text-center">Search Books</h2>
        <div className="row">
          <table className="table table-bordered custom-table">
            <thead className="thead-light">
              <tr>
                <th> Book ID</th>
                <th> Book Name</th>
                <th> Book Edition</th>
                <th> Book Author</th>
                <th> Book Price</th>
                <th className="narrow-column"> Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.bookName}</td>
                  <td>{book.dateOfPublish}</td>
                  <td>
                    {book.authors.map((a, i, authors) => (
                      <span key={a.id}>
                        {a.authorName}
                        {i + 1 === authors.length ? "" : ", "}
                      </span>
                    ))}
                  </td>
                  <td>{book.price}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => Navigate(`/user/update-book/${book.id}`)}
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-danger"
                      onClick={() => {
                        deleteBook(book.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-info"
                      onClick={() => Navigate(`/user/view-book/${book.id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default BookList;
