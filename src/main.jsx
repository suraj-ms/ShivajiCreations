import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Employee from './components/Employee/Employee.jsx'
import AddUser from './components/AddUser/AddUser.jsx'
import Measurement from './components/Measurement/Measurement.jsx'
import BillInfo from './components/BillInfo/BillInfo.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <App />,
//     children: [{
//       path: "",
//       element: <Home />
//     }, {
//       path: "employee",
//       element: <Employee />
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App/>}>
      <Route path = '' element={<Home/>} />
      <Route path = 'employee' element={<Employee/>} />
      <Route path = 'add-user' element={<AddUser/>} />
      <Route path = 'measurement' element={<Measurement/>} />
      <Route path = 'measurement/:order_number' element={<Measurement/>} />
      <Route path = 'bill-info/:order_number' element={<BillInfo/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
