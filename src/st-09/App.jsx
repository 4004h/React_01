import Toolbar from "./Toolbar";
import { useEffect, useState } from "react"

// function LandingPage(params) {

// }

function App() { //함수명
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onClickLogin = ()=>{
    setIsLoggedIn(true)
  }

  const onClickLogOut= ()=>{
    setIsLoggedIn(false)
  }
  return (
    <div>
      <Toolbar
        isLoggedIn = {isLoggedIn}
        onClickLogin = {onClickLogin}
        onClickLogout = {onClickLogOut}
      />
    </div>
  )
}

export default App; //보내는 이름