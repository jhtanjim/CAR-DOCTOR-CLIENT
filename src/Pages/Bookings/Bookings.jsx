import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import { data } from 'autoprefixer';

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])



    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })


    }, [])
    // transfer from booking row
    const handleDelete = id => {
        const proceed = confirm('Are you Sure to want to Delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {

                method: 'DELETE',



            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted Successful')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })

        }

    }

    // 
    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                }


            })
    }



    return (
        <div>
            <h1 className="text-5xl">Booking : {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Bookings;