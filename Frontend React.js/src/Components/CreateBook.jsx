import React, { useEffect, useState } from "react";
import bookServices from "./BookService"
import { useNavigate } from "react-router-dom";

function CreateBook() {
  let Navigate=useNavigate();
  const [bookName, setBookName] = useState("");
  const [edition, setEdition] = useState("");
  const [dateOfPublish, setDateOfPublish] = useState("");
  const [price, setPrice] = useState("");
  const [authors, setAuthors] = useState([
    { id: 0, authorName: "", gender: "" },
  ]);
  const [authorList, setAuthor] = useState([]);

  const handleAuthorChange = (index, key, value) => {
    const newAuthors = [...authors];
    newAuthors[index][key] = value;
    setAuthors(newAuthors);
  };

  const addAuthor = () => {
    setAuthors([...authors, { authorName: "", gender: "" }]);
  };

  const saveBook = (e) => {
    e.preventDefault();
    const book = { bookName, edition, dateOfPublish, price, authors };
    console.log(book);
      bookServices
        .getSaveBook(book)
        .then(() => {
          console.log(book);
          alert("Book Saved");
          Navigate("/user/book");
        })
        .catch((err) => {
          console.log(err);
          alert("Please Provided valid information");
          Navigate("/");
        });
  };

  useEffect(() => {
    bookServices.getAuthors()
      .then((res) => {
        setAuthor(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
    
      <br></br>
      <div className="main1">
        <br></br>
        <div>
          <div>
            <h3 className="text-center">Add Book</h3>
            <div>
              <form onSubmit={saveBook}>
                <div className="form-group">
                  <label> Book Name: </label>
                  <input
                    placeholder="Enter Book Name"
                    name="bookName"
                    className="form-control"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Book Edition: </label>
                  <input
                    placeholder="Enter Book Edition"
                    name="edition"
                    className="form-control"
                    value={edition}
                    onChange={(e) => setEdition(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Date of Publish: </label>
                  <input
                    type="date"
                    placeholder="Enter YOP YYYY-MM-DD"
                    name="dateOfPublish"
                    className="form-control"
                    value={dateOfPublish}
                    onChange={(e) => setDateOfPublish(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Price: </label>
                  <input
                    name="price"
                    className="form-control"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                {authors.map((author, index) => (
                  <div key={index}>
                    <div className="form-group">
                      <label>Select Previous</label>
                      <select
                        name="preauthor"
                        className="form-control"
                        placeholder="Select Previous"
                        value={authors[index].id}
                        onChange={(e) =>
                          handleAuthorChange(index, "id", e.target.value)
                        }
                      >
                        <option>Select</option>
                        {authorList.map((a) => (
                          <option value={a.id} key={a.id}>
                            {a.id}, {a.authorName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {(authors[index].id === 0 || authors[index].id == null) && (
                      <>
                        <div className="form-group">
                          <label>Author Name:</label>
                          <input
                            placeholder="Enter Author Name"
                            name="authorName"
                            className="form-control"
                            value={authors[index].authorName}
                            onChange={(e) =>
                              handleAuthorChange(
                                index,
                                "authorName",
                                e.target.value
                              )
                            }
                          required/>
                        </div>

                        <div className="form-group">
                          <label>Author Gender:</label>
                          <input
                            placeholder="Enter Author Gender"
                            name="gender"
                            className="form-control"
                            value={authors[index].gender}
                            onChange={(e) =>
                              handleAuthorChange(
                                index,
                                "gender",
                                e.target.value
                              )
                            }
                          required/>
                        </div>
                      </>
                    )}
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
                  onClick={()=>{Navigate("/user/book")}}
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

export default CreateBook;
