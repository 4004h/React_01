import { useEffect, useState } from "react"

export default function ListTest(params) {

  const [name_, setName_] = useState('')
  const [gender, setGender] = useState("납자")

  function handleName(e) {
    setName_(e.target.value)
  }
  function handleGender(e) {
    setGender(e.target.value)
  }

  useEffect(()=>{
  },[name_])

  function handleSubmit(e) {
    e.preventDefault()
    alert(` 이름 : ${name_} \n 성별 : ${gender}`)
  }

  

  return(
    <>
      <form action="" onSubmit={handleSubmit}>

        
        <label> 이름 : <input type="text" onChange={handleName}/>
        </label>
        <br/>
        <label>
          성별 : <select value={gender} name="" id="" onChange={handleGender}>
            <option value="납자">납자</option>
            <option value="여자">여자</option>
          </select>
        </label>

        <button type="submit"> 제출 </button>
        {/* <input type="text" name="" id="name_" onChange={handleChange}/> */}
      </form>
    </>
  )
}
