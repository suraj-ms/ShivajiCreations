import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DATA, PRICES } from './data';
import './BillInfo.css';

const BillDetails = ({ order }) => (
    <section className='cust_details'>
        {order ? (
            <>
                <div className="order_number cust_data"> <p>Order Number: {order.order_number}</p></div>
                <div className="cust_name cust_data"> <p>Name: {order.name}</p></div>
                <div className="ph_number cust_data"> <p>Phone Number: {order.phone_number}</p></div>
            </>
        ) : (
            <p className='ord_not_found'>Order not found.</p>
        )}
    </section>
);

const DateInputWithConfirmation = ({ label, initialDate }) => {
    const [selectedDate, setSelectedDate] = useState(initialDate || '');
    const [confirming, setConfirming] = useState(false);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setConfirming(true);
    };

    const handleConfirm = () => {
        console.log("Selected Date:", selectedDate);
        setConfirming(false);
    };

    const handleCancel = () => {
        setConfirming(false);
    };

    return (
        <div className="date_section">
            <label>{label}</label>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
            {confirming && (
                <div className="confirmation_dialog">
                    <p>Are you sure you want to select this date?</p>
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
};

const EditPopup = ({ order, onClose, onUpdateData }) => {
    const [editedParticular, setEditedParticular] = useState(order.perticular);
    const [confirmSave, setConfirmSave] = useState(false);

    const handleParticularChange = (e, particular) => {
        const value = parseInt(e.target.value);
        const newValue = isNaN(value) ? '' : value < 0 ? 0 : value;
        setEditedParticular(prevParticular => ({
            ...prevParticular,
            [particular]: newValue.toString()
        }));
    };

    const handleSaveConfirmation = () => {
        setConfirmSave(true);
    };

    const handleSave = () => {
        const updatedParticulars = { ...editedParticular };
        Object.keys(updatedParticulars).forEach(key => {
            if (updatedParticulars[key] === '0') delete updatedParticulars[key];
        });
        onUpdateData(order.order_number, updatedParticulars);
        onClose();
    };

    const handleCancel = () => {
        setConfirmSave(false);
    };

    return (
        <div className="edit_popup">
            <span onClick={onClose}><ion-icon name="close-outline"></ion-icon></span>
            <h2>Edit Particular</h2>
            <br />
            {Object.keys(PRICES).map(particular => (
                <div className='edit_popup_items' key={particular}>
                    <label>{particular}</label>
                    <input
                        type="text"
                        value={editedParticular[particular] || ''}
                        onChange={(e) => handleParticularChange(e, particular)}
                    />
                </div>
            ))}
            {!confirmSave ? (
                <button className='edit_popup_save_btn' onClick={handleSaveConfirmation}>Save</button>
            ) : (
                <div className="confirmation_dialog">
                    <p>Are you sure you want to save the changes?</p>
                    <button onClick={handleSave}>Confirm</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
};

const BillInfo = () => {
    const { order_number } = useParams();
    const [data, setData] = useState(DATA);
    const order = data.find(item => item.order_number === parseInt(order_number));
    const [editPopupOpen, setEditPopupOpen] = useState(false);

    // Extract dates from order
    const trailDate = order ? order.trail_date : '';
    const deliveryDate = order ? order.delivery_date : '';

    const openEditPopup = () => setEditPopupOpen(true);
    const closeEditPopup = () => setEditPopupOpen(false);

    const updateData = (orderNumber, updatedParticular) => {
        const updatedData = data.map(item => {
            if (item.order_number === orderNumber) {
                return {
                    ...item,
                    perticular: updatedParticular
                };
            }
            return item;
        });
        setData(updatedData);
    };

    return (
        <section className='container'>
            <div className="cust_data_Section">
                <div>
                    {order && (
                        <>
                            {/* Pass initial dates to DateInputWithConfirmation */}
                            <DateInputWithConfirmation label="Trail Date" initialDate={trailDate} />
                            <DateInputWithConfirmation label="Delivery Date" initialDate={deliveryDate} />
                        </>
                    )}
                </div>
                <div className="cust_details">
                    <BillDetails order={order} />
                </div>
            </div>
            <div className="cust_bill_section">
                {order && Object.keys(order.perticular).length > 0 && (
                    <section className='bill'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Particular</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(order.perticular).map(([particular, quantity], index) => (
                                    <tr key={index}>
                                        <td>{particular}</td>
                                        <td>{PRICES[particular]}</td>
                                        <td>{quantity}</td>
                                        <td>{PRICES[particular] * quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">Total</td>
                                    <td>{Object.entries(order.perticular).reduce((total, [particular, quantity]) => total + (PRICES[particular] * quantity), 0)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </section>
                )}
            </div>
            {order && <button className='edit_btn' onClick={openEditPopup}>Edit</button>}
            {editPopupOpen && <EditPopup order={order} onClose={closeEditPopup} onUpdateData={updateData} />}
        </section>
    );
};

export default BillInfo;
