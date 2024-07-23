import { useLocation } from "react-router-dom";

const users = [
  {id:1,name_:"홍길동",job:"무직", hobby:"steal"},
  {id:2,name_:"이길동",job:"백수", hobby:"football"},
  {id:3,name_:"박길동",job:"학생", hobby:"game"},
]

export default function Serach(params) {
  const search = useLocation()
  const queryParams = new URLSearchParams(search.search)
  const query = queryParams.get("query")
  const user = users.find(item=>item.hobby === query)

  return(
    <div>
      {user ? 
        ( 
          <>
            <h2>찾는 취미는 {query}</h2>
            <p> 이름 : {user.name_} </p>
            <p> 직업 : {user.job} </p>
          </>
        ) 
         :  (<h2>찾는 취미가 없음</h2>)
      }
      
    </div>
  )
}

