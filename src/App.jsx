import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Nabar';
import {Link, Outlet} from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
