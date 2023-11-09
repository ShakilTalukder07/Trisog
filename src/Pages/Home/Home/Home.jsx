import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Tours from "../Tours/Tours";
import Updates from "../Updates/Updates";

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <ChooseUs></ChooseUs>
            <Tours></Tours>
            <Features></Features>
            <Contact></Contact>
            <Updates></Updates>
            <Footer></Footer>
        </div>
    );
};

export default Home;