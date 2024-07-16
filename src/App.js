import logo from './logo.svg';
import './App.css';

function Ul() {
  return(
    <ul>
    <li>개</li>
    <li>토끼</li> 
    <li>고양이</li>
    <li>거북이</li>
  </ul>
  )
}
function Table() {
  return(
    <table border="1px">
      <tr>
        <th>이름</th>
        <th>나이</th>
      </tr>
      <tr>
        <td>홍길동</td>
        <td>24</td>
      </tr>
      <tr>
        <td>이순신</td>
        <td>44</td>
      </tr>
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <Ul></Ul>
      <Table></Table>
      {/* <Ul/> <Table/> */}


    </div>
  );
}

export default App;
