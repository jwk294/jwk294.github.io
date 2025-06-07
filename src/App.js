import logo from './Assets/img4.png';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './pages/Home'
import Home from './pages/Home';
import Dude from './pages/Dude';
import Girlie from './pages/Girlie';
import Err404 from './pages/Err404';
import Gamer from './pages/Gamer';
import Strawberry from './pages/Strawberry';
import Flip from './pages/flip'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="Dude" element={<Dude />} />
        <Route path="Girlie" element={<Girlie />} />
        <Route path="Dude/Gamer" element={<Gamer />} />
        <Route path="Dude/flip" element={<Flip />} />
        <Route path="Girlie/strawberry" element={<Strawberry />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
