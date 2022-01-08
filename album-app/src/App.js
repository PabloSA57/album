
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Paginas/Home';
import Inicio from './Paginas/Inicio';
import { Add } from './Paginas/Comopentes/AddImage';
import Login from './Paginas/Comopentes/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
