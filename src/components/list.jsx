import "./list.css"
import React,{ useState } from "react"

export default function List(params) {
  let [리스트, 리스트변경] = useState([])

  function Addlist(params) {
    return(
      <div className="addlist"> <div className="data"> {params.i+1}. {params.name} ({params.age})세 {params.job} </div> 
      <button onClick={()=>{
        let 삭제 = [...리스트]
        삭제.splice(params.i,1)
        리스트변경(삭제)
      }}>삭제</button></div>
    )
  }
  // delt users = users.filter(user => user.id != id_ ) filter 조건이 참인것만 넣음

  function Init() {
    let 
    name_ = document.getElementById("name").value,
    age_ = document.getElementById("age").value,
    job_ = document.getElementById("job").value

    if( name_ == '' || age_ == '' || job_ == '' ) return 0

    let 추가 = [...리스트]
    추가.push({name_:name_,age:age_,job:job_})
    리스트변경(추가)

    // document.getElementById("name").value = ''
    // document.getElementById("age").value = ''
    // document.getElementById("job").value = ''
  }

  //onChange(e) { let [a,b] = useState(); b(e.tatget.value) }

  return(
    <>
      <div className="list">
        <table className="init">
          <tr>
            <td><label for="name"> 이름 : </label></td>
            <td><input /*onChange={changeName}*/ placeholder="이름" type="text" id="name"/></td>
            <td width={80} rowSpan={3}><button type="button" onClick={Init}>추가</button></td>
          </tr>
          <tr>
            <td><label for="age"> 나이 : </label></td>
            <td><input /*onChange={changeAge}*/ placeholder="나이" type="text" id="age"/></td>
          </tr>
          <tr>
            <td><label for="job"> 직업 : </label></td>
            <td><input /*onChange={changeJob}*/ placeholder="직업" type="text" id="job"/></td>
          </tr>
        </table>
      </div>
      <div className="listbox">
        {리스트.map(function (e,i) {
          return( <Addlist name={e.name_} age={e.age} job={e.job} i={i} key={i}/>) 
        })}
      </div>
    </>
  )
}
