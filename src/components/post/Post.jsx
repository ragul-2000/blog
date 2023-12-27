import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postcat">Music</span>
                <span className="postcat">Life</span>
            </div>
            <span className="postTitle">
            In the Heart of Nature
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescription"> The cool mist dances around me, as the sounds of rushing water and the whispers of the wind orchestrate a harmonious symphony. Here, time stands still, and every worry is washed away by the gentle flow beneath. The waterfall becomes a natural stage, and I, a humble spectator, find peace in the enchanting theater of the great outdoors. #NatureZen #WaterfallMeditation #RockyRetreat 🌊🍃</p>
    </div>
  )
}
