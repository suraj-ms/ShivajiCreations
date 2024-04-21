import './Navbar.css'
import {Link} from "react-router-dom";


function Navbar() {

  return (
    <>
      <section className='nav_bar'>
        <Link to="/" className="brand_logo"><img src="https://github.com/suraj-ms/Shivaji-Creation-Host/blob/master/ShivajiCreations/src/assets/img/logo/shivajiLogo.png?raw=true" alt="" /></Link>
        <Link to="employee" className="employee_nav">Employee Section</Link>
      </section>
    </>
  )
}

export default Navbar
