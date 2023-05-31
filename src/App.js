import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Detail, Menu, Shoes, About, MoreButton } from '@/components';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import data from './components/data';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Shoes />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<>맴버임</>} />
          <Route path="location" element={<>장소임</>} />
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<>없는페이지요</>} />
      </Routes>
      <MoreButton />
    </div>
  );
}

export default App;
