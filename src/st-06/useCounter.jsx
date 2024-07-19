// 3.useEffect사용하는방법
import { useState, useEffect } from "react";

const max = 10

export default function useCounter(iniValue){
  const [count, setCount] = useState(iniValue) 
  const increase = ()=>{ setCount( (count) => count+1) }
  const decrease = ()=>{ setCount( (count) => Math.max(count-1,0)) }
  //보다 큰값만 리턴 = 감소해도 0에서 멈춤

  return [count, increase, decrease]
}