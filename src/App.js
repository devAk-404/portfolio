import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes.js/Home';
import Projects from './Routes.js/Projects';
import About from './Routes.js/About';
import Contact from './Routes.js/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
}

export default App;
