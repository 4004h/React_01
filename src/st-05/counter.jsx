// 3.useEffect사용하는방법
import { useState, useEffect } from "react";
export default function Counter(props){
  // const[읽기변수, 입력함수] = useState(초기값)
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  //마운트후, 수정후 실행
  useEffect(
    ()=>{
      document.title = `총 ${count} / ${count2}`;
      console.log('effect_count=>',count,',',count2);
    }, [count,count2]// <= 가 컴포넌트가 렌더링된 이후 실행
  );
  return (
    <div>
      <p id='msg'>총 {count}/ {count2}번의 클릭했습니다.</p>
      <button onClick={()=>{
        //count++; 읽기전용이라 직접변경 불가능
        setCount(count+1);
        console.log('count=>',count+1);
      }}>클릭1</button>
      <button onClick={()=>{
        //count++; 읽기전용이라 직접변경 불가능
        setCount2(count2+1);
        console.log('count2=>',count2 + 1);
      }}>클릭2</button>
    </div>
  );
}

// import { useState } from "react"
// export default function Counter(params) {
//   let [count, setCount] = useState(0)
//   // let count = 0
//   return(
//     <div>
//       <p id="this">총 {count}번의 클릭</p>
//       <button onClick={()=>{
//         setCount(count+1)
//         // count++
//         // document.getElementById("this").innerText = `총 ${count}번의 클릭`
//       }}>클릭</button>

//     </div>
//   )
// }