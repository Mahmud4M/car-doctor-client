import { ImCross } from "react-icons/im";


const BookingRow = ({ booking, handleDlete, handleUpdatedConfirm  }) => {
    const { _id, service_id, price, img, customerName, email, status, date } = booking;

    return (
        <>
            <tr>
                <td><button onClick={() => handleDlete(_id)}><ImCross /></button></td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customerName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {email}

                </td>
                <td>
                    {date}

                </td>
                <td>{price}</td>
                <th>
                    { 
                    status === 'confirm' ?
                    <button className="btn btn-secondary">Confirmed</button>
                    :
                    <button onClick={() => handleUpdatedConfirm(_id)} className="btn btn-secondary">Pending</button>
                    }
                </th>
            </tr>
        </>
    );
};

export default BookingRow;