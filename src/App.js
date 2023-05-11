import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu, Shoes } from '@/components';
function App() {
  return (
    <div className="App">
      <Menu />
      <div className="main-bg"></div>
      <Shoes />
    </div>
  );
}

export default App;
