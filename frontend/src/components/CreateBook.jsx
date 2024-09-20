import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CreateBookForm = () => { 
  const navigate = useNavigate();

  const [createBook, setCreateBook] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
  });

  const handleChange = (e) => {
    setCreateBook({
      ...createBook,
      [e.target.name]: e.target.value,
    });
  };

  const createBookCall = async() =>{
    try {
        const response = await axios.post(`http://localhost:7000/books`, createBook);
        const data = response.data;
        console.log(data,"Book Created");
        if(response?.status===201){
            navigate("/");
        }
      } catch (error) {
        console.error('Error in Creating the book:', error);
      }
  };



  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            value={createBook.title} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="author"
            value={createBook.author} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="year"
            value={createBook.year} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Genre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="genre"
            value={createBook.genre} 
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" onClick={createBookCall}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBookForm;
