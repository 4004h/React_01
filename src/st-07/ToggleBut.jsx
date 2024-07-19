import { useState } from "react";

export default function ToggleBut(params) {
  const [onAir,seyOnAir] = useState(true)
  const [onAir2,seyOnAir2] = useState(true)
  const [onAir3,seyOnAir3] = useState(true)

  // function fun1(params) {
  //   seyOnAir(!onAir)
  // }
  // const fun2 = () => {
  //   seyOnAir2(!onAir2)
  // }

  function fun(e,m) {
    // console.log(e.target.textContent == "onAir")
    switch (m) {
      case 1:
        e.target.textContent == "onAir" ? seyOnAir(false) : seyOnAir(true)
        break;

      case 2:
        e.target.textContent == "onAir" ? seyOnAir2(false) : seyOnAir2(true)
        break;

      case 3:
        e.target.textContent == "onAir" ? seyOnAir3(false) : seyOnAir3(true)
        break;
    }
  }

  return(
    <>
    <button onClick={(e)=>fun(e,1)}>
      {/* {onAir} */}
      {onAir ? "onAir" : "offAir"} 
    </button>

    <button onClick={(e)=>fun(e,2)}>
      {/* {onAir2} */}
      {onAir2 ? "onAir" : "offAir"} 
    </button>

    <button onClick={(e)=>fun(e,3)}>
      {/* {onAir3} */}
      {onAir3 ? "onAir" : "offAir"} 
    </button>
    </>
    
  )
}


// html  button onclick = '함수'
// react button onClick = {함수}
// react button onClick = {(e)=>{함수(e,,,)}}