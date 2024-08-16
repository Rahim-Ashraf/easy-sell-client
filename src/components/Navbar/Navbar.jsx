import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl font-black">Easy <span className="text-[#0055ff]">Sell</span></Link>
            </div>

            <div className="navbar-end">
                {user ? <button onClick={handleLogout} className="btn btn-error text-white">Logout</button>
                    :
                    <>
                        <Link to="/login"><button className="ml-4 btn bg-[#0055ff] text-white font-bold">Login</button></Link>
                        <Link to="/register"><button className="ml-4 btn bg-[#0055ff] text-white font-bold">Register</button></Link>
                    </>
                }
            </div>

        </div>
    );
};

export default Navbar;