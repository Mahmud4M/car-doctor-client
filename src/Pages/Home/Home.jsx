import AboutUs from "../About/AboutUs";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
    return (
        <>
            <div className="space-y-10">
                <Banner></Banner>
                <AboutUs></AboutUs>
                <Services></Services>
            </div>
        </>
    );
};

export default Home;