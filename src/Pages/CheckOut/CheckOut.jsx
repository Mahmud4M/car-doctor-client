import { useLoaderData } from "react-router-dom";
import checkout from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const services = useLoaderData();
    const { _id, title, price, img } = services;
    const { user } = useContext(AuthContex);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;

        const order = {
            customerName: name,
            date,
            phone,
            email: user?.email,
            price: price,
            service: _id,
            img
        }
        console.log(order)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your booked successfully !',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })

    }

    return (
        <>
            <div className="lg:w-[70rem] mx-auto mt-10">
                <img src={checkout} alt="" />
            </div>
            <h1 className="text-3xl text-orange-400 font-medium mt-5 text-center">{title}</h1>
            <div className="bg-base-200 p-20 mt-10 mb-10 rounded-2xl">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Phone Number</span>
                                </label>
                                <input type="text" name="phone" placeholder="Enter Your Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Due Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Enter Your Messege" className="input input-bordered" required />
                            </div>
                            <div className="mt-5">
                                <button className="btn btn-secondary w-full">Book Service</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CheckOut;