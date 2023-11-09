import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Updates from "../Updates/Updates";

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Updates></Updates>
            <Footer></Footer>
        </div>
    );
};

export default Home;