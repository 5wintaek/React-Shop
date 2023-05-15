import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Detail, Menu, Shoes, About } from '@/components';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Shoes />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<>맴버임</>} />
          <Route path="location" element={<>장소임</>} />
        </Route>
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<>없는페이지요</>} />
      </Routes>
    </div>
  );
}

export default App;
