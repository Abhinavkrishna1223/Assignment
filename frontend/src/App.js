import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import FormComponent from "./components/Form";

function App() {
  const [book, setBook] = useState([]);

  const apicall = async () => {
    try {
      const fetch = await axios.get("http://localhost:7000/books");
      const data = fetch?.data || [];
      setBook(data);
    } catch (error) {
      console.error("API call failed:", error);
      setBook([]);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Card book={book} />
    },
    {
      path: "/update/:id",
      element: <FormComponent/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
