import {BrowserRouter, Routes, Route} from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Services } from "./pages/Services";
import { Navbar } from "./components/Navbar";

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App