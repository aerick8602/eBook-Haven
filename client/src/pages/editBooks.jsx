import React, { useState, useEffect } from "react";
import BackButton from "../components/event/navigation";
import Loader from "../components/event/Loader";
import handleEditBook from '../tasks/editbook.js'; // Corrected import path
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";

const EditBook = () => {
  const [loading, setLoading] = useState(false);
  const [Author, setAuthor] = useState("");
  const [Topic, setTopic] = useState("");
  const [Department, setDepartment] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        // Simulate a delay of at least 2 seconds
        setTimeout(() => {
          setAuthor(res.data.Author);
          setTopic(res.data.Topic);
          setDepartment(res.data.Department);
          setLoading(false);
        }, 500); // 2000 milliseconds = .5 seconds
      })
      .catch((err) => {
        setLoading(false);
        alert('An error occurred, Please Check Console');
        console.log(err);
      });
  }, [id]);

  const handleEdit = () => {
    handleEditBook(id, Department, Author, Topic, setLoading, enqueueSnackbar, navigate);
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-7xl font-extrabold font-fav text-center text-3xl my-4">Edit Book</h1>
      {loading && <Loader loading={loading} />}
      <div className="flex flex-col items-center border-2 border-blue-500 rounded-xl max-w-lg mx-auto p-4">
        <div className="my-2 w-full">
          <label className="font-sans text-base mr-4 text-gray-700">Department</label>
          <input
            type="text"
            value={Department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Department"
            className="border-2 border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500"
          />
        </div>

        <div className="my-2 w-full">
          <label className="font-sans text-base mr-4 text-gray-700">Author</label>
          <input
            type="text"
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="border-2 border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="my-2 w-full">
          <label className="font-sans text-base mr-4 text-gray-700">Book</label>
          <input
            type="text"
            value={Topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Book"
            className="border-2 border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500"
          />
        </div>

        <button className="py-1 px-4 bg-sky-500 text-white rounded-lg mt-4 hover:bg-sky-600 transition-colors" onClick={handleEdit}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default EditBook;
