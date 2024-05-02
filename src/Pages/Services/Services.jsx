import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <>
            <div className="space-y-5 text-center">
                <h3 className="text-3xl font-medium text-orange-500">Services</h3>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ducimus vitae voluptatibus deleniti, incidunt iure  repellat aspernatur, <br />  incidunt iure  repellat aspernatu  quis tempora eveniet vel necessitatibus dolorum architecto non.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;