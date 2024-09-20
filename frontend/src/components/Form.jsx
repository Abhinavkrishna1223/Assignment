import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FormComponent = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
  });

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/books/${id}`);
      const data = response.data;
      setBook({
        title: data?.title,
        author: data?.author,
        year: data?.year,
        genre: data?.genre,
      });
    } catch (error) {
      console.error('Error fetching the book:', error);
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const updateBookDetails = async() =>{
    try {
        const response = await axios.patch(`http://localhost:7000/books/${id}`, book);
        const data = response.data;
        console.log(data,"UPDATED BOOk")
      } catch (error) {
        console.error('Error upadeting the book:', error);
      }
  };

  const deleteBook = async() =>{
    try {
        const response = await axios.delete(`http://localhost:7000/books/${id}`);
        const data = response.data;
        console.log(data,"Book Deleted");
        if(response?.status===200){
            navigate("/");
        }
      } catch (error) {
        console.error('Error upadeting the book:', error);
      }
  };

  useEffect(() => {
    fetchBook(); 
  }, []);


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
            value={book.title} 
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
            value={book.author} 
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
            value={book.year} 
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
            value={book.genre} 
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" onClick={updateBookDetails}
          >
            Update
          </button>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" onClick={deleteBook}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
