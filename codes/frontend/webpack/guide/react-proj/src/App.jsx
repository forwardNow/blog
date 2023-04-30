import React, { Suspense, lazy } from "react";
import {Link, Routes, Route} from 'react-router-dom';
import { Button } from 'antd'
import 'antd/dist/antd.less';

import Home from './pages/home';
// import About from './pages/about';

const About = lazy(() => import(/* webpackChunkName: 'about' */ "./pages/About"));

function App() {
  return (
    <div>
      <h1>App</h1>
      <div><Button type="primary">按钮</Button></div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
