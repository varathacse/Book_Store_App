import React, { useEffect, useState } from "react";
import bookServices from "./BookService";
import { useParams,useNavigate } from "react-router-dom";

function UpdateAuthor() {
  const { id } = useParams();
  let navigate=useNavigate();
  const [authorName, setAuthorName] = useState("");
  const [gender, setGender] = useState("");

  const saveBook = (e) => {
    e.preventDefault();
    const author = { id, authorName, gender };
    console.log(author);

    bookServices
      .updateAuthor(author)
      .then((res) => {
        console.log(res);
        alert("Author Update Successfully");
        navigate("/user/book");
      })
      .catch((err) => {
        console.log(err);
        navigate("/user/book");
      });
  };

  useEffect(() => {
    bookServices
      .getAuthorById(id)
      .then((res) => {
        let author = res.data;
        setAuthorName(author.authorName);
        setGender(author.gender);
      })
      .catch((err) => {
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
            <h3 className="text-center">Update Author</h3>
            <div>
              <form onSubmit={saveBook}>
                <div className="form-group">
                  <label> Author Name: </label>
                  <input
                    placeholder="Enter Author Name"
                    name="authorName"
                    className="form-control"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Author Gender: </label>
                  <input
                    placeholder="Enter Author Gender"
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginLeft: "10px" }}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }} onClick={()=>{navigate("/user/book")}}
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

export default UpdateAuthor;
