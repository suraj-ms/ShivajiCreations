import './Home.css'
import DataTable from '../DataTable/DataTable'
import {Link} from "react-router-dom";


export default function Home() {

  return (
    <>
      <DataTable />
      <Link to="add-user" className="add_user"><ion-icon name="person-add-outline"></ion-icon></Link>
    </>
  )
}
