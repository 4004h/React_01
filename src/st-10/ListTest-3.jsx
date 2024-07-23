
const animals = [
  '고양이','호랑이','기러기',
]

export default function ListTest(params) {
  return(
    <ul>
      {//map primary key를 가져야함
        animals.map(function (v,i) {
          return( <li key={i}> {i}. {v} </li> )
        })
      }
    </ul>
  )
}
