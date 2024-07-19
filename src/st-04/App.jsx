import Review from "./review"
import List from "../st-03/list"

const style = {
  maxWidth: 550,
  width : '100%',
  margin: "auto"
}

function App() { //함수명
  return (
    <div style={style}>
      <List/>
      <Review/>
    </div>
  )
}

export default App; //보내는 이름