import { useEffect, useState } from "react"
import Grading from "./Grading"


export default function ScoreComp(params) {
  const [kor, setkor] = useState(0)
  const [eng, seteng] = useState(0)
  const [mat, setmat] = useState(0)

  const [isGrade, setIsGrade] = useState(false)
  
  function GradeText(params) {
    setIsGrade(true)
  }

  return(
    <>
      <ul style={{padding:0,listStyle:"none"}}>
        <li>
          <label> 국어 : <input type="text" onChange={(e)=>{setkor(Number(e.target.value))}}/></label>
        </li>
        <li>
          <label> 영어 : <input type="text" onChange={(e)=>{seteng(Number(e.target.value))}}/></label>
        </li>
        <li>
          <label> 수학 : <input type="text" onChange={(e)=>{setmat(Number(e.target.value))}}/></label>
        </li>
        <li>
          <br/>
          <button onClick={GradeText}>평가</button>
        </li>
      </ul>
      
      {isGrade && <Grading kor={kor} eng={eng} mat={mat}/>}
    </>
  ) 
}