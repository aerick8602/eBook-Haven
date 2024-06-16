import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/left-arrow.png';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex items-center">
      <Link
        to={destination}
        className="flex items-center px-4 py-2 transition duration-300">
        <img src={arrow} className='h-12 p-2  hover:scale-110 hover:bg-slate-200 hover:rounded-full' alt="" />
      </Link>
    </div>
  );
};

export default BackButton;
