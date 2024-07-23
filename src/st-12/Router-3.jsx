import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./page/Home"
// { Home } 버전
import About from "./page/About-2"
// { About } 버전
import AboutDetails from "./page/About-Details"


export default function RouterWap(params) {
  
  return(
    <Router>
      <nav>
        <Link to='/'> Home </Link> | <Link to='/about'> About </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="details" element={<AboutDetails/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
