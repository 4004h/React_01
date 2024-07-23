import { useParams } from "react-router-dom"

const users = [
  {id:1,name_:"홍길동",job:"무직"},
  {id:2,name_:"이길동",job:"백수"},
  {id:3,name_:"박길동",job:"학생"},
]

export default function User(params) {
  const id = useParams().id
  const user = users.find(item=> item.id === Number(id))
  return (
    <div>

      { 
        user ? 
        ( 
          <>
            <h2> 사용자 아이디 : {id} </h2> 
            <p> 이름 : {user.name_} </p>
            <p> 직업 : {user.job} </p>
          </>
        )
         : (<p> 자료없음 </p>) 

      }

    </div>
  )
};


