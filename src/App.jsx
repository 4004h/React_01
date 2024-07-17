import Login from "./components/login"


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
      <Login/>
    </div>
  )
}

export default App;//보내는 이름