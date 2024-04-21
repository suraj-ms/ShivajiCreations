import './EmployeeCurrentWIP.css'
import DataTable from "react-data-table-component";



function EmployeeCurrentWIP() {

    const columns = [
        {
            name: "orderNumber",
            selector: data => data.orderNumber,
        },
        {
            name: "quantity",
            selector: data => data.quantity
        },
        {
            name: "Action",
            cell : row => <button onClick={() => alert(row.orderNumber)} className="edit_employee_WIP"><ion-icon name="create-outline"></ion-icon></button>
          },

          {
            name: "Action",
            cell : row => <button onClick={() => alert(row.orderNumber)} className="delete_employee_WIP"><ion-icon name="trash-outline"></ion-icon></button>
          },


    ];


    const data = [
        {
            orderNumber: 101,
            quantity: "3"
        },

        {
            orderNumber: 102,
            quantity: "2"
        },

        {
            orderNumber: 101,
            quantity: "3"
        },

        {
            orderNumber: 102,
            quantity: "2"
        },
        {
            orderNumber: 101,
            quantity: "3"
        },

        {
            orderNumber: 102,
            quantity: "2"
        },
        {
            orderNumber: 101,
            quantity: "3"
        },

        {
            orderNumber: 102,
            quantity: "2"
        },

    ];

    return (
        <>

            <span className="employee_WIP" style={{ overflowX: 'scroll' }}>
                <span className='add_employee_WIP'><ion-icon name="add-outline"></ion-icon></span>
            <h4>Employee Name</h4>
            <DataTable className='data_table' columns={columns} data={data}
        highlightOnHover noTableHead />
            </span>
                       

        </>
    )
}

export default EmployeeCurrentWIP
