import React, { Suspense, } from 'react';
import Blogs from './Components/Blogs/Blogs';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';

const fetchPromise = fetch('./blogs.json').then(res => res.json())

const App = () => {
  
  return (
    <div className=''>
      <Navbar />
      <Banner />
      <div>
        <Blogs fetchPromise={fetchPromise} />
      </div>
    </div>
  );
};

export default App;