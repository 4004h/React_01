import { useState, useEffect } from "react"

export default function ListTest(params) {

  const [value, setValue] = useState('apple')

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(value)
  }


  return(
    <>
      <form action="" onSubmit={handleSubmit}>
        <select value={value} style={{margin:"0px 8px"}} onChange={handleChange} name="" id="">
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="melon">멜론</option>
        </select>

        <button type="submit"> 제출 </button>
        {/* <input type="text" name="" id="name_" onChange={handleChange}/> */}
      </form>
    </>
  )
}
