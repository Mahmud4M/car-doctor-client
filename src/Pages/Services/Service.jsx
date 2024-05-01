import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <>
            <div className="card w-96 bg-base-100 border gap-6 mb-6">
                <figure className="px-7 pt-7">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div className="space-y-3">
                            <h2 className="card-title">{title}</h2>
                            <p className="text-lg text-orange-500">Price: ${price}</p>
                        </div>
                        <div className="card-actions text-orange-500">
                            <Link><FaArrowRightLong /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Service;