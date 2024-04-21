import React from 'react'
import { useParams } from 'react-router-dom';
import { DATA } from './data';


function measurementDetails(orderNumber) {
  const order = DATA.find(item => item.order_number === orderNumber);
  if (order) {
    return (
      <div>
        <h2>Order Details</h2>
        <p>Order Number: {order.order_number}</p>
        <p>Name: {order.name}</p>
        <p>Phone Number: {order.phone_number}</p>
      </div>
    );
  } else {
    return <p>Order with order number {orderNumber} not found.</p>;
  }
}


function Measurement() {
    const { order_number } = useParams();
  return (
    <>
    <h2>akfakfjk</h2>
    {measurementDetails(parseInt(order_number))}
    </>
  )
}

export default Measurement