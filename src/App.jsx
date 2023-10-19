import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"

const App= () => {
    
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>   
        </div>
    )
  
}

export default App
