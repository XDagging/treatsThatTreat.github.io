import React, {useState, useEffect} from "react"
import Navbar from "./Navbar.jsx"
import { clear } from "@testing-library/user-event/dist/clear.js"



function Index(props) {
    const totalText = "We give back to our heros."
    let currentText = ""
    let i=-1

    const [currentDonor, setCurrentDonor] = useState(0)

    
    const donorList = [
    {
        img: 'https://www.hopkinsmedicine.org/-/media/images/locations/ignore/north-building-entrance.jpeg',
        description: "Surburban Hospital. Donated over 150+ cookies"
    },
    {
        img: 'https://www.senioradvisor.com/images/opt_big/2017/08/25/10/32/10/656/y32kPsTbQIeiC9VjpZok.jpg',
        description: "Carriage Hill Nursery Home. Donated over 160+ cookies"
    }]
    useEffect(() => {




        const typewriter = setInterval(() => {
        
            i++
            if (i <= totalText.length-1) {
                
                currentText = currentText + totalText[i]
                document.getElementById("typewriter").innerHTML = currentText
            } else {
                clearInterval(typewriter)
            }
            
            
        }, 50)


        return () => {
            clearInterval(typewriter)
        }
    },[])


    useEffect(() => {
        const donor = setInterval(() => {
            console.log("current donor", currentDonor)
            if (currentDonor < donorList.length- 1) {
                console.log("added to current donor");
                if (currentDonor+1 < donorList.length) {
                    setCurrentDonor(prevDonor => prevDonor + 1);
                } else {
                    setCurrentDonor(0)
                }
            } else {
                console.log("resetting to 0 because currentDonor reached the end of the list");
                setCurrentDonor(0)
            }



        }, 5000)


        return () => {
            clearInterval(donor)
        }
    })
    





    

    

    return (
        <>

        <div className="hidden lg:block">
        <Navbar />
        </div>
    


        <div className="md:ml-[7vw] bg-[#EAE2B7]">
            
            
        <div className="w-full sm:h-[40vh] h-[60vh] relative background-image">
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="relative z-50 w-full h-full">
            <div className="absolute left-[50%] top-[50%]" style={{transform: "translate(-50%,-50%)"}}>
            <p id="typewriter" className="text-6xl font-bubble p-5    text-white"></p>
            <p className="text-lg kanit text-center font-bubble text-white ">Cookie by cookie</p>
            </div>
                
                
            </div>
        </div>

        {/* testimonial */}
        <div className=" bg-[#FFAFCC] w-full">
            <p className="font-bubble text-4xl pl-4 py-5 text-[#f41fc5] ">Our stats: </p>
            <div className="md:h-[50vh] h-[100vh] w-full grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-y-10 justify-items-stretch items-stretch">

            <div className="relative h-full w-full font-extrabold">
                <div className="absolute top-[50%] left-[50%] bg-[#BDE0FE] md:w-4/6 w-5/6 h-full rounded-lg p-2 font-bubble" style={{transform: "translate(-50%, -50%)"}}>
                    <p className="text-white text-3xl text-center mt-4">We've handbaked over:</p>
                    <p className="text-center  text-white p-5 my-10 rounded-lg bg-[#66b7fd] w-fit mx-auto select-none text-4xl">500+</p>
                    <p className="text-center  text-white text-3xl md:text-5xl mt-5">C🍪🍪kies</p>
                </div>


    
            </div>
            
            <div className="relative h-full w-full font-extrabold">
                <div className="absolute top-[50%] left-[50%] bg-[#BDE0FE] md:w-4/6 w-5/6 h-full rounded-lg p-2 font-bubble" style={{transform: "translate(-50%, -50%)"}}>
                    <p className="text-white text-3xl text-center my-4">Our Ingredients</p>
                    <div className="lg:w-3/6 w-5/6 h-3/6 border-2 mx-auto rounded-lg"><img src={require("./ingredients.png")} className="object-cover w-full h-full rounded-lg"/></div>
                    <p className="text-white text-center md:text-2xl text-lg mt-8">sourced locally only using top quality, handcrafted, everytime</p>
                    {/* <p className="text-center  text-white p-5 mt-5 rounded-lg bg-slate-500 w-fit mx-auto select-none text-4xl">500+</p>
                    <p className="text-center  text-white text-5xl mt-5">C🍪🍪kies</p> */}
                </div>


    
            </div>

            {/* <div className="relative h-full w-full font-extrabold">
                <div className="absolute top-[50%] left-[50%] bg-[#BDE0FE] w-4/6 h-full rounded-lg p-2 font-bubble" style={{transform: "translate(-50%, -50%)"}}>
                    <p className="text-white text-3xl text-center">We've handbaked over:</p>
                    <p className="text-center  text-white p-5 mt-5 rounded-lg bg-slate-500 w-fit mx-auto select-none text-4xl">500+</p>
                    <p className="text-center  text-white text-5xl mt-5">C🍪🍪kies</p>
                </div>


    
            </div> */}

        </div>




        <div className="seperator"></div>



        <div className="h-[50vh] bg-[#80ffdb]">
        <p className="font-bubble text-3xl text-center">Donor Recipients</p>
            <div className="md:w-2/6 w-5/6 h-5/6 mt-5 rounded-lg mx-auto relative">
                <img src={donorList[currentDonor].img} className="rounded-t-lg rounded-b-lg w-full h-full object-cover" /> 
                <p className=" w-full bg-white p-2 absolute bottom-0 left-0 text-black font-bubble rounded-b-lg">{donorList[currentDonor].description}</p>
            </div>
        

        </div>

        <div className="seperator-right"></div>


        <div className="">
            <p className="text-center font-bubble text-3xl">Our mission</p>
            <p className="w-5/6 text-center mx-auto py-5 font-bubble ">At Treats That Treat, our mission is to deliver a touch of sweetness and care to those in need within hospitals, nursery homes, and other institutions. Through the power of homemade baked goods, we aim to provide comfort, joy, and a sense of home to individuals facing challenging circumstances. Our organization is dedicated to spreading kindness and fostering connections within communities by offering delicious treats made with love and compassion. By serving our baked goods with a smile, we strive to uplift spirits, create moments of delight, and contribute to the well-being of those we serve. Treats That Treat is committed to making a positive difference one bite at a time.</p>

        </div>

        <div className="mt-[5%]">
            <p className="kanit text-lg p-4">
                A Hernandez Production
            </p>
        </div>

        </div>
        
            
            


            

        </div>




        </>
        

        
    )
}


export default Index