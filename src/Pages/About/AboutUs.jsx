import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <>
            <div className="hero min-h-screen p-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative'>
                        <img src={person} className="w-3/4 rounded-lg" />
                        <img src={parts} className="w-1/2 rounded-lg border-8 border-white absolute top-1/2 right-10" />
                    </div>
                    <div className='space-y-5'>
                        <h1 className="text-2xl font-bold text-red-500">About Us</h1>
                        <h1 className="text-5xl font-bold leading-[5rem]">We are qualified & of experience in this field</h1>
                        <div className="py-6 text-lg">
                        <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="mt-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <button className="btn btn-warning text-lg">Get More Info</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;