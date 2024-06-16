import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/event/Loader";
import BooksTable from "../components/data/Booksdata";
import { Link } from "react-router-dom";
import { MdFormatListBulletedAdd } from "react-icons/md";
import logo from "../assets/logo.png";
import { BASE_URL } from "../../render";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setshowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/books`)
      .then((res) => {
        setTimeout(() => {
          setBooks(res.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="m-0">
      <nav className="flex flex-row justify-center p-0 m-0 h-20">
        <img src={logo} alt="" className="h-16 lg:h-24" />
        <h1 className="py-3 text-5xl lg:py-7 lg:text-7xl text-sky-800 font-fav font-extrabold">eBook Haven</h1>
      </nav>
      <Link to="/books/create" className="flex flex-row-reverse">
        <MdFormatListBulletedAdd className="text-4xl mr-4 lg:text-5xl lg:mr-4 text-blue-900" />
      </Link>

      {loading ? (
        <Loader loading={loading} />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
      <footer className="fixed bottom-5 w-full">
        <p className="text-center font-mono">
          Developed by
          &nbsp;<a href="https://github.com/aerick8602/eBook-Haven" className="font-bold text-sky-800 hover:underline">Ayush Katiyar</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
