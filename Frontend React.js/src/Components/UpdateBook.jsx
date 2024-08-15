import React, { useEffect, useState } from "react";
import bookServices from "./BookService";
import { useParams, useNavigate } from "react-router-dom";

let UpdateBook=()=> {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    id: "",
    bookName: "",
    edition: "",
    dateOfPublish: "",
    price: "",
    authors: [],
  });

  const addAuthor = () => {
    setBook((prevBook) => ({
      ...prevBook,
      authors: [...prevBook.authors, { authorId: "", authorName: "", gender: "" }],
    }));
  };

  const removeAuthor = (index) => {
    setBook((prevBook) => {
      const updatedAuthors = [...prevBook.authors];
      updatedAuthors.splice(index, 1);
      return { ...prevBook, authors: updatedAuthors };
    });
  };

  const handleAuthorChange = (index, key, value) => {
    setBook((prevBook) => {
      const updatedAuthors = [...prevBook.authors];
      updatedAuthors[index][key] = value;
      return { ...prevBook, authors: updatedAuthors };
    });
  };

  const saveBook = (e) => {
    e.preventDefault();
    const updatedAuthors = book.authors.map(({ authorId, ...rest }) => rest);
    const updatedBook = { ...book, authors: updatedAuthors };
    console.log(updatedBook);
    bookServices
      .getUpdateBook(updatedBook)
      .then(() => {
        console.log(updatedBook);
        alert("Book Update Successfully");
        navigate("/user/book");
      })
      .catch((err) => {
        console.log(err);
        alert("Please Provide valid information");
        navigate("/user/book");
      });
  };

  useEffect(() => {
    bookServices.getBookById(id).then((res) => {
      const bookData = res.data;
      setBook({
        id: bookData.id,
        bookName: bookData.bookName,
        edition: bookData.edition,
        dateOfPublish: bookData.dateOfPublish,
        price: bookData.price,
        authors: bookData.authors,
      });
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="main1">
        <br></br>
        <div>
          <div>
            <h3 className="text-center">Update Book</h3>
            <div>
              <form onSubmit={saveBook}>
                <div className="form-group">
                  <label> Book Name: </label>
                  <input
                    placeholder="Enter Book Name"
                    name="bookName"
                    className="form-control"
                    value={book.bookName}
                    onChange={(e) => setBook((prevBook) => ({ ...prevBook, bookName: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Book Edition: </label>
                  <input
                    placeholder="Enter Book Edition"
                    name="edition"
                    className="form-control"
                    value={book.edition}
                    onChange={(e) => setBook((prevBook) => ({ ...prevBook, edition: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Year of Publish: </label>
                  <input
                    type="date"
                    placeholder="Enter YOP YYYY-MM-DD"
                    name="dateOfPublish"
                    className="form-control"
                    value={book.dateOfPublish}
                    onChange={(e) => setBook((prevBook) => ({ ...prevBook, dateOfPublish: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Price: </label>
                  <input
                    name="price"
                    className="form-control"
                    placeholder="Enter Price"
                    value={book.price}
                    onChange={(e) => setBook((prevBook) => ({ ...prevBook, price: e.target.value }))}
                    required
                  />
                </div>

                {book.authors.map((author, index) => (
                  <div key={index}>
                    <div className="form-group">
                      <label> Author Name: </label>
                      <input
                        placeholder="Enter Author Name"
                        name="authorName"
                        className="form-control"
                        value={author.authorName}
                        onChange={(e) => handleAuthorChange(index, "authorName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label> Author Gender: </label>
                      <input
                        placeholder="Enter Author Gender"
                        name="gender"
                        className="form-control"
                        value={author.gender}
                        onChange={(e) => handleAuthorChange(index, "gender", e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeAuthor(index)}
                    >
                      Remove Author
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-info"
                  onClick={addAuthor}
                >
                  Add More Author
                </button>

                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginLeft: "10px" }}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    navigate("/user/book");
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default UpdateBook;
