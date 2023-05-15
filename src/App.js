import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Detail, Menu, Shoes } from '@/components';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route path="/" element={<Shoes />} />
        <Route path="/about" element={<>어바웃페이지임</>} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
