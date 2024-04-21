import './Employee.css'
import EmployeeCurrentWIP from '../EmployeeCurrentWIP/EmployeeCurrentWIP'
import Edit_WIP from '../EmployeeCurrentWIP/Edit_WIP'


function Employee() {

  return (
    <>
    <div className="edit">
    <Edit_WIP />
    </div>
    <div>
     <EmployeeCurrentWIP />
     <EmployeeCurrentWIP />
     <EmployeeCurrentWIP />
     <EmployeeCurrentWIP />
     <EmployeeCurrentWIP />
     <EmployeeCurrentWIP />
    </div>
    </>
  )
}

export default Employee
