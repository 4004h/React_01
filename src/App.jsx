

function App() { //함수명
  const style = {border:"1px solid black"}
  const aaa = (param)=>{
    let dog = param.target.getAttribute( 'data' )
    alert( dog )
  }

  return (
    <div style = {style}>

      <p>안녕하세여</p>
      <p>반가워여</p>
      <button onClick={aaa} data="강아지">버튼</button>

    </div>
  )
}

export default App;//보내는 이름