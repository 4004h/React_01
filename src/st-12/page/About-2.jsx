import { Link, Outlet } from "react-router-dom";

//default 버전 
export default function About(params) {
  return ( 
    <>
      <h2> 도움말2 </h2> 
      <nav>
        <Link to='details'>
          도움말 상세로 이동
        </Link>
        <Outlet/>
      </nav>
    </>
  )
};




