
const animals = [
  '고양이','호랑이','기러기',
]

export default function ListTest(params) {
  return(
    <ul>
      <li>{animals[0]}</li>
      <li>{animals[1]}</li>
      <li>{animals[2]}</li>
    </ul>
  )
}
