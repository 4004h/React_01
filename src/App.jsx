import ColoredMessage from "./components/ColoredMessage.jsx"
import ColoredMessage2 from "./components/ColoredMessage2.jsx"

function App() { //함수명
  const aaa = (param)=>{
    let dog = param.target.getAttribute( 'data' )
    alert( dog )
  }
  const redStyle = {
    color:"red",
    backgroundColor:"yellow"
  }
  const pinkStyle = {
    color : "pink",
    fontSize:"20px"
  }
  return (
    <div style = {{border:"1px solid black"}}>

      <p style={{color:"blue",fontSize:"32px"}}>안녕하세여</p>
      {/* <p style={redStyle}>반가워여 잘지내지</p> */}
      <ColoredMessage color="orange" message="잘지내시죠?"/>
      <ColoredMessage color="red" message="how do you do"/>
      <ColoredMessage2 color="blue">잘지내</ColoredMessage2>
      <p style={ pinkStyle }>잘지내</p>
      <button onClick={aaa} data="강아지">버튼</button>

    </div>
  )
}

export default App;//보내는 이름