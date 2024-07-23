import { useEffect, useState } from "react"

export default function ListTest(params) {

  const [guestNum, setGuestNum] = useState(0)
  const [have, setHave] = useState(false)

  function handleCheck(e) {
    setHave(e.target.checked)
    console.log(guestNum)
  }
  function handleChange(e) {
    setGuestNum(e.target.value)
  }

  useEffect(()=>{
    console.log(guestNum)
  },[])

  function handleSubmit(e) {
    e.preventDefault()
    alert(`아침식사 : ${have} 인원 : ${guestNum}`)
  }


  return(
    <>
      <form action="" onSubmit={handleSubmit}>

        
        <label>아침식사
          <input type="checkbox" onChange={handleCheck}/>
        </label>
        <br/>
        <label>
          <input type="number" value={guestNum} onChange={handleChange}/>
        </label>

        <button type="submit"> 제출 </button>
        {/* <input type="text" name="" id="name_" onChange={handleChange}/> */}
      </form>
    </>
  )
}
