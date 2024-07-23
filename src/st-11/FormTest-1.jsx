import { useState } from "react"

export default function ListTest(params) {

  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(value)
  }


  return(
    <>
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="name_">이름 : 
          {/* <textarea style={{margin:'0px 8px',resize:"none",verticalAlign:'sub'}} rows="1" spellcheck="false" onChange={handleChange}/> */}
        </label>
        <input style={{margin:'0px 8px'}} type="text" name="" id="name_" onChange={handleChange}/>
        <button type="submit"> 제출 </button>
      </form>
    </>
  )
}
