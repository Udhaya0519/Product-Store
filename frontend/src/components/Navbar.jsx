import { Link } from 'react-router-dom'
import { BsPlusSquare } from "react-icons/bs";


function Navbar() {
    return ( 
        <div className="navbar-wrapper">
            <div className="container py-5 px-2.5">
                <div className="navbar flex justify-between items-center">
                    <Link to={'/'}>
                        <div className="logo flex items-center gap-1 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text" >
                            PRODUCT STORE 🛒
                        </div>
                    </Link>
                    <Link to={'/create'}>
                        <div className="create-btn bg-gray-600 p-2 rounded">
                            <BsPlusSquare className="text-white text-xl sm:text-2xl"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default Navbar;