import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function Alert({ toDisplayAlert, message }) {
    const [closeAlert, setCloseAlert ] = useState(false);

    return (
        <div className={`alert bg-blue-400 text-center text-lg sm:text-xl rounded w-[290px] sm:w-fit py-2 px-3 border-l-10 border-l-blue-800 fixed flex items-center top-18 left-1/2 z-[9999] transition-all duration-500 transform -translate-x-1/2 ${toDisplayAlert === true ? "":"hidden"} ${ closeAlert === true ? "hidden" : ""}`}>
            <span className="flex-1">{message}</span>
            <span className="ml-3" onClick={ () => {setCloseAlert(true)}}>
                <IoMdCloseCircle size={20}/>
            </span>
        </div>
    );
}

export default Alert;
