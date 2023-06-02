import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Addnotes() {
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesend = async (e) => {
    let imgUrl = "";
    if (file) imgUrl = await upload();
    if (!validation(input)) return;
     try {
      const res = await axios.post(
        `http://localhost:5000/api/notes`,
        {
            ...input,
            img: imgUrl
          }
      );
      if (res) {
        return navigate("/", { replace: true });
      }
    } catch (error) {
      setError(error.response.data);
    }
  };
  const validation = (Value) => {
    const error1 = {};
    if (!Value.title) {
      error1.title = "*TITLE IS REQUIRED";
    }
    if (!Value.description) {
      error1.description = "*DESCRIPTION IS REQUIRED";
    }
    setError(error1);
    if (!error1.title && !error1.description) return true;
    return false;
  };

  return (
    <>
      <div className="input">
        <h1>Add your post</h1>
        <input
          className="input-field"
          name="title"
          placeholder="Enter your title"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.title}</p>
        <textarea
          className="input-field2"
          name="description"
          placeholder="Enter your Description"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.description}</p>
        <input
          type="file"
          id="file"
        //   style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="send-btn" onClick={handlesend}>
          Save
        </button>
      </div>
    </>
  );
}
