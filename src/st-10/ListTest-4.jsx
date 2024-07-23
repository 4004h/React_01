
const students = [
  {id:1,name_:"홍길동",job:"무직"},
  {id:2,name_:"이길동",job:"백수"},
  {id:3,name_:"박길동",job:"학생"},
]

export default function ListTest(params) {
  return(
    <ul>
      {
        students.map(function (v,i) {
          return( <li key={i}> {v.id}. {v.name_}({v.job}) </li> )
        })
      }
    </ul>
  )
}
