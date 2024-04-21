import './Edit_WIP.css'



function Edit_WIP() {

  return (
    <div className='edit_wip'>
        <div className="close_btn"><ion-icon name="close-outline"></ion-icon></div>
        <h4>Edit WIP</h4>
        <hr />
        <br />
        <div>
        <span>Oreder Number</span>
        <span><input type="text" /></span>
        </div>
        <div>
        <span>Quantity</span>
        <span><input type="text" /></span>
        </div>
        <button type="submit">Save</button>
    </div>
  )
}

export default Edit_WIP
