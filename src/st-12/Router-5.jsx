import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// {  } 버전
import Home from "./page/Home"
import About from "./page/About-2"
import AboutDetails from "./page/About-Details"
import User from "./page/User"
import Serach from "./page/Serach"


export default function RouterWap(params) {
  
  return(
    <Router>
      <nav>
        <Link to='/'> Home </Link> | <Link to='/user/1'> User </Link> | <Link to='/serach?query=football'> serach </Link> | <Link to='/about'> About </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/serach" element={<Serach/>}/>
        
        <Route path="/about" element={<About/>}>
          <Route path="details" element={<AboutDetails/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
