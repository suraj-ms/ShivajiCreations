import React, { useState } from 'react'
import './AddUser.css'
import { Link } from 'react-router-dom'

function AddUser() {

  const [order_number, setOrderNumber] = useState('');

  const handleSubmit = (e) => {
    setOrderNumber(e.target.value);
  };

  return (
    <>
    <div className="input_section">
      <input type="text" value={order_number}  onChange={handleSubmit} placeholder='Order Number'/>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Phone Number'/>
    </div>
    <Link to={`/measurement/${order_number}`} className='btn'>Measurement</Link>
    <Link to={`/bill-info/${order_number}`} className='btn'>Bill Page</Link>
    </>
  )
}

export default AddUser