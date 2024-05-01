import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <>
            <div className="carousel w-full h-[600px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba-(21, 21, 21, 0)]">
                        <div className='w-1/3 text-white space-y-5 ml-12'>
                            <h1 className='text-6xl font-bold leading-[5rem]'>Affordable Price For Car Servising</h1>
                            <p className='text-lg leading-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quo similique iure laboriosam mollitia fugiat, ullam numquam pariatur temporibus ipsa?</p>
                            <div>
                                <button className='btn btn-warning mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 bg-green-400">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-green-400">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba-(21, 21, 21, 0)]">
                        <div className='w-1/3 text-white space-y-5 ml-12'>
                            <h1 className='text-6xl font-bold leading-[5rem]'>Affordable Price For Car Servising</h1>
                            <p className='text-lg leading-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quo similique iure laboriosam mollitia fugiat, ullam numquam pariatur temporibus ipsa?</p>
                            <div>
                                <button className='btn btn-warning mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 bg-green-400">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-green-400">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba-(21, 21, 21, 0)]">
                        <div className='w-1/3 text-white space-y-5 ml-12'>
                            <h1 className='text-6xl font-bold leading-[5rem]'>Affordable Price For Car Servising</h1>
                            <p className='text-lg leading-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quo similique iure laboriosam mollitia fugiat, ullam numquam pariatur temporibus ipsa?</p>
                            <div>
                                <button className='btn btn-warning mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-green-400">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba-(21, 21, 21, 0)]">
                        <div className='w-1/3 text-white space-y-5 ml-12'>
                            <h1 className='text-6xl font-bold leading-[5rem]'>Affordable Price For Car Servising</h1>
                            <p className='text-lg leading-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quo similique iure laboriosam mollitia fugiat, ullam numquam pariatur temporibus ipsa?</p>
                            <div>
                                <button className='btn btn-warning mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 bg-green-400">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-green-400">❯</a>
                    </div>
                </div>

                <div id="slide5" className="carousel-item relative w-full h-[600px]">
                    <img src={banner5} className="w-full" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba-(21, 21, 21, 0)]">
                        <div className='w-1/3 text-white space-y-5 ml-12'>
                            <h1 className='text-6xl font-bold leading-[5rem]'>Affordable Price For Car Servising</h1>
                            <p className='text-lg leading-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quo similique iure laboriosam mollitia fugiat, ullam numquam pariatur temporibus ipsa?</p>
                            <div>
                                <button className='btn btn-warning mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 bg-green-400">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-green-400">❯</a>
                    </div>
                </div>

                <div id="slide6" className="carousel-item relative w-full h-[600px]">
                    <img src={banner6} className="w-full" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba-(21, 21, 21, 0)]">
                        <div className='w-1/3 text-white space-y-5 ml-12'>
                            <h1 className='text-6xl font-bold leading-[5rem]'>Affordable Price For Car Servising</h1>
                            <p className='text-lg leading-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quo similique iure laboriosam mollitia fugiat, ullam numquam pariatur temporibus ipsa?</p>
                            <div>
                                <button className='btn btn-warning mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-5 bg-green-400">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-green-400">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;