import React, { Suspense, useState } from 'react';
import Blogs from './Components/Blogs/Blogs';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchPromise = fetch('./blogs.json').then(res => res.json())

const App = () => {
  const [favorite, setFavorite] = useState([])
  const handleFavorite = (item) => {
    setFavorite([...favorite, item])
    toast.success('An item is added to favorites.')
    console.log(favorite)
  }
  return (
    <div className=''>
      <Navbar />
      <Banner />
      <div>
        <Blogs favorite={favorite} fetchPromise={fetchPromise} handleFavorite={handleFavorite} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;