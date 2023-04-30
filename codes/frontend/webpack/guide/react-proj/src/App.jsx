import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
