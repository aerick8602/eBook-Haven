import React from 'react';
import { Link } from "react-router-dom";
import { MdMovieEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSnackbar } from 'notistack';
import { FaFilePdf } from "react-icons/fa6";
import { LuBadgeInfo } from "react-icons/lu";
import handleDeleteBook from '../../tasks/deletebook';
import showBookDetails from '../../tasks/showbook';
import { BASE_URL } from '../../../render';


const BooksTable = ({ books, setBooks }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleBookDelete = (bookId) => {
    handleDeleteBook(bookId, setBooks, enqueueSnackbar);
  };

  const downloadURL = (pdfFilePath) => {
    const baseUrl = `${BASE_URL}/public/`;
    console.log("baseURL->" + baseUrl);

    // Use a more robust method to extract the filename
    const fileName = pdfFilePath.split('/').pop().split('\\').pop();
    console.log("filename->" + fileName);

    return baseUrl + fileName;
  }

  return (
    <table className="px-4 w-full border-spacing-1 border-separate border-spacing-0.5">
      <thead className='bg-gray-200'>
        <tr>
          <th className=" w-9 font-dosis border-2 rounded border-gray-900 lg:w-10 ">No</th>
          <th className=" w-56 font-dosis border-2 rounded border-gray-900 lg:w-48  max-md:hidden">Department</th>
          <th className=" w-32 font-dosis border-2 rounded border-gray-900 lg:w-48  max-md:hidden">Author</th>
          <th className=" w-80 font-dosis border-2 rounded border-gray-900 lg:w-84 ">Book</th>
          <th className=" w-6 font-dosis border-2 rounded border-gray-900 lg:w-12 ">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className=" p-0 font-dosis border rounded border-gray-700 w-10 text-center">{index + 1}</td>
            <td className=" p-0 font-dosis border rounded border-gray-700 w-56 text-center max-md:hidden">{book.Department}</td>
            <td className=" p-0 font-dosis border rounded border-gray-700 w-32 text-center max-md:hidden">{book.Author}</td>
            <td className=" p-0 font-dosis border rounded border-gray-700 w-80 text-center ">{book.Topic}</td>
            <td className=" p-0 font-dosis border rounded border-gray-700 w-6 text-center">
              <div className="flex justify-center gap-x-4">
                <button onClick={() =>
                  showBookDetails(book._id)} className="focus:outline-none">
                  <LuBadgeInfo className="text-2xl text-blue-600" />
                </button>
                <a href={downloadURL(book.pdfFilePath)} className="text-sky-500 hover:underline ml-2" download>
                  <FaFilePdf className='text-2xl text-green-600' />
                </a>
                <Link to={`/books/edit/${book._id}`}>
                  <MdMovieEdit className="text-2xl text-yellow-600" />
                </Link>
                <button className="cursor-pointer focus:outline-none" onClick={() => handleBookDelete(book._id)}>
                  <RiDeleteBin6Line className="text-2xl text-red-600" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
