import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const secureAxious = axios.create({
    baseURL: 'https://car-doctor-server-omega-eight.vercel.app',
    withCredentials: true
})

const AxiousSecure = () => {
    const { logOut } = useContext(AuthContex);
    const navigate = useNavigate;

    useEffect(() => {
        secureAxious.interceptors.response.use(res => {
            return res;
        }, error => {
            // console.log('error from axious hooks', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                {
                    console.log('logout the user');
                    logOut()
                        .then(() => {
                            navigate('/login')
                        })
                        .catch(error => console.log(error))
                }
            }
        }
        )
    }, [])

    return secureAxious;
};

export default AxiousSecure;