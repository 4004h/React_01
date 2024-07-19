// 3.useEffect사용하는방법
import { useState, useEffect } from "react";
import useCounter from "./useCounter"

const max = 10
export default function Gate(props){
  // const[읽기변수, 입력함수] = useState(초기값)
  const [full, setFull] = useState(false)//최대정원
  const [empty, setEmpty] = useState(true)//정원0명

  const [count, increase, decrease] = useCounter(0) //현재입장객

  useEffect(()=>{
    setFull(count >= max)//최대입장객 상태 셋팅
    setEmpty(count <= 0)//비어있는 상태 셋팅
  },[count])

  return (
    <div>
      <p id='msg'>총 {count}명 수용하였습니다.</p>
      
      <button disabled={full} onClick={()=>{
        increase()

        // //입장객 증가
        // let count_ = count + 1
        // setCount(count_)//입장객값변경 => 재랜더링
          
      }}>입실</button>
      <button disabled={empty} onClick={()=>{
        decrease()

        // let count_ = count - 1
        // setCount(count_)//입장객값변경 => 재랜더링
      }}>퇴실</button>

      { true == false ? 'asd' : null }
      { full && <p style={{color:"red"}}>정원이 가득찼습니다.</p> }
      { empty && <p style={{color:"red"}}>입장이 없습니다.</p> }

      

    </div>
  );
}

// html  button onclick = '함수'
// react button onClick = {함수}