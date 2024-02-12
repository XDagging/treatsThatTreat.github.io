import React, {useState} from "react";
import Index from "./Index.jsx"




function App(props) {
    const [currentPage, setCurrentPage] = useState("Index")



    return (
        <div className="overflow-x-hidden">
            <Index />
        </div>
        
    )
}



export default App;