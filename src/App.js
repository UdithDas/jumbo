import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Nread from './components/Nread';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toolbar } from '@mui/material';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar></Toolbar>
      <Routes>
        <Route path="/sss" element={<teachers></teachers>}></Route>
        <Route path="/amigos" element={<Read></Read>}></Route>
        <Route path="/teachers" element={<Nread></Nread>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
