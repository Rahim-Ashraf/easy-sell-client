import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const Navbar = () => {
    const { logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl font-black">Easy <span className="text-[#0055ff]">Sell</span></Link>
            </div>

            <div className="navbar-end">
                {/* {user ? <details className="dropdown dropdown-end">
                    <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                        </div>
                    </summary >
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={handleLogout} className="btn btn-error text-white">Logout</button></li>
                    </ul>
                </details>
                    : */}
                <>
                    <Link to="/login"><button className="ml-4 btn bg-[#0055ff] text-white font-bold">Login</button></Link>
                    <Link to="/login"><button className="ml-4 btn bg-[#0055ff] text-white font-bold">Register</button></Link>
                </>
                {/* } */}
            </div>

        </div>
    );
};

export default Navbar;