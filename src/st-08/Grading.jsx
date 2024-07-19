
function Grading(params) {
    return (
      <div>
        <p>
          국어 : { params.kor }점
          영어 : { params.eng }점
          수학 : { params.mat }점 
        </p>
        <p>
          총점 : { params.mat + params.eng + params.kor }점
          평균 : { (( params.mat + params.eng + params.kor ) / 3).toFixed(1) }점 
          과락 : { params.kor >= 40 ? params.eng >= 40 ? params.mat >= 40 ? "통과" : "불통" : "불통" : "불통" } 
        </p>
        <p>
          { 
            (( params.mat + params.eng + params.kor ) / 3) >= 60 
            && params.kor >= 40 ? params.eng >= 40 ? params.mat >= 40 ? 
            "합격입니다" : "불합격입니다" : "불합격입니다" : "불합격입니다"
          }
          
        </p>
      </div>
      )
}

export default Grading