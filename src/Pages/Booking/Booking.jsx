import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Booking = () => {
    const { user } = useContext(AuthContex);
    const [bookings, setBookings] = useState();

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDlete = id => {
        const procced = confirm('Are You want to Delete');
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted')
                        const remaining = bookings.filter(book => book._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleUpdatedConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // updated state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(book => book._id === id);
                    updated.status = 'confirm'
                    const newUpdated = [updated, ...remaining];
                    setBookings(newUpdated);
                }
            })
    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Deatils</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDlete={handleDlete}
                                handleUpdatedConfirm={handleUpdatedConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Booking;