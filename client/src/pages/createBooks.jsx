import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import BackButton from "../components/event/navigation";
import Loader from "../components/event/Loader";
import DragNdrop from '../components/event/DragNdrop.jsx';
import uploadBook from '../tasks/uploadbook.js';

const CreateBook = () => {
  const [loading, setLoading] = useState(false);
  const [Department, setDepartment] = useState("");
  const [Author, setAuthor] = useState('');
  const [Topic, setTopic] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleFilesSelected = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleUpload = () => {
    console.log("hey i am here")
    uploadBook(file, Department, Author, Topic, setLoading, enqueueSnackbar, navigate);
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-7xl font-extrabold font-fav text-center">Upload Book</h1>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-3 mx-auto">
          <div className="my-2">
            <input
              type="text"
              value={Department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
              className="rounded-md border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <div className="my-2">
            <input
              type="text"
              value={Author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
              className="rounded-md border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <div className="my-2">
            <input
              type="text"
              value={Topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Book"
              className="rounded-md border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <div className="my-2">
            <DragNdrop onFilesSelected={handleFilesSelected} width="100%" height="200px" />
          </div>

          <div className="flex flex-row justify-center">
            <button className="py-1 px-4 w-16 bg-sky-500 text-white rounded-lg mt-4 hover:bg-sky-600 transition-colors" onClick={handleUpload}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
