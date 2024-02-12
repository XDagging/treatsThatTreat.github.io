import React from "react"
import { FaAddressBook, FaBullseye, FaUser } from "react-icons/fa6";


function Navbar(props) { 


    return (
        <>
            <div className="fixed top-0 left-0 lg:w-[7vw] w-full lg:h-full bg-[#BDE0FE] z-20">


<div className="w-full text-white p-2">
    <div className="p-2 mx-auto w-fit h-fit"><img src={require("./logo.png")} className="object-cover w-20 h-20 rounded-full border-2 logo"/></div>
</div>


<div className="w-full text-white p-2 mt-[20%] group relative transition-all">
    <div className="p-2 mx-auto w-fit h-fit bg-[#BDE0FE]"><FaAddressBook size="2rem" /></div>

    <div className="opacity-0 ease-in-out duration-300 scale-105 hover:opacity-100 group-hover:opacity-100 absolute right-[-40px] text-black top-[50%]" style={{transform: "translateY(-50%)"}}>
            <div className="relative h-full w-full">
            <div className="bg-[#FDF0D5] p-2 rounded-lg absolute right-[-10vw] top-[50%]" style={{transform: "translateY(-50%)"}}>
                <p className="kanit text-lg p-2 w-fit"><strong className="text-lg">Email us: </strong><u><a href="mailto:treatsthattreat@gmail.com">treatsthattreat@gmail.com</a></u></p>
            </div>
            </div>
            
            
    </div>
</div>

<div className="w-full text-white p-2 mt-[20%]">
    <div className="p-2 mx-auto w-fit h-fit bg-[#BDE0FE]"><FaBullseye size="2rem" /></div>
</div>

<div className="w-full text-white p-2 mt-[20%]">
    <div className="p-2 mx-auto w-fit h-fit bg-[#BDE0FE]"><FaUser size="2rem" /></div>
</div>



</div>


        
        </>
        
    )
    
}

export default Navbar