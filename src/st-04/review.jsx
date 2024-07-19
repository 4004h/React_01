// import "./review.css"
const styles = {
  wrapper : {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16
  },
  imageContainer : {
    height:50
  },
  image : {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  contentContainer : {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText : {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  commentText : {
    color: "black",
    fontSize: 16,
  }
}

const comments = [
  {name_:'손흥민',comment:"정말 재미있는 영화였음"},
  {name_:'홍길동',comment:"정말 감동있는 영화였음"}
]

export default function review(){
  function Wrapper(params) {
    return(
      <div style={styles.wrapper} class="wrapper">
        <div style={styles.imageContainer} class="image-container">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style={styles.image}
                class="image"
                alt="Profile Image"
            />
        </div>
        <div style={styles.contentContainer} class="content-container">
            <span style={styles.nameText} class="name-text">{params.name}</span>
            <span style={styles.commentText} class="comment-text">{params.comment}</span>
        </div>
      </div>
    )
  }

  return(
    <>
      {comments.map((comment)=>{
        return(<Wrapper name={comment.name_} comment={comment.comment}/>)
      })}

    </>
  )
}