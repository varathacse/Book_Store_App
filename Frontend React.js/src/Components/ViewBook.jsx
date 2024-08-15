import { useEffect, useState } from "react";
import bookServices from "./BookService";
import { useNavigate, useParams } from "react-router-dom";

const ViewBook = () => {
  let [book, SetBook] = useState({});
  const { id } = useParams();
  let Navigate = useNavigate();

  useEffect(() => {
    bookServices
      .getBookById(id)
      .then((data) => {
        SetBook(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log();
      });
  }, [id]);

  let deleteBook = () => {
    bookServices
      .deleteBookById(id)
      .then(() => {
        alert("Delete Book Successfully");
        Navigate("/user/book");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let back = () => {
    Navigate("/user/book");
  };
  let updatebook = (id) => {
    Navigate(`/user/update-book/${id}`);
  };

  return (
    <div className="main2">
      <br></br>
      <div>
        <table className="table table-bordered">
          <thead className="thead-light text-center">
            <tr>
              <th colSpan="2">Book Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Book Id</th>
              <td>{book.id}</td>
            </tr>
            <tr>
              <th scope="row">Book Name</th>
              <td>{book.bookName}</td>
            </tr>
            <tr>
              <th scope="row">Book Edition</th>
              <td>{book.edition}</td>
            </tr>
            <tr>
              <th scope="row">Year Of Publish</th>
              <td>{book.dateOfPublish}</td>
            </tr>
            <tr>
              <th scope="row">Book Price</th>
              <td>{book.price}</td>
            </tr>
            <tr>
              <th scope="row">Author</th>
              <td>
                {book.authors?.map((a, i, authors) => (
                  <span key={a.id}>
                    {a.authorName}
                    {i + 1 === authors.length ? "" : ", "}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <button
                  className="btn btn-info"
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    updatebook(book.id);
                  }}
                >
                  Update{" "}
                </button>
                <button
                  className="btn btn-success"
                  style={{ marginLeft: "20px" }}
                  onClick={deleteBook}
                >
                  Delete
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "20px" }}
                  onClick={back}
                >
                  Cancel
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ViewBook;
