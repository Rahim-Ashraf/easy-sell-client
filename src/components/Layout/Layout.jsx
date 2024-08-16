import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";


const Layout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Layout;