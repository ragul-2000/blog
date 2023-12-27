import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>John</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p  className="singlePostDesc">At the heart of every motorcycle is an engine that serves as the beating heart of adventure. The symphony of revving revs and the growl of the exhaust create a sensory experience like no other, signaling the beginning of a journey that transcends the mundane. From the sleek lines of sportbikes to the robust stature of cruisers, each motorcycle has its unique personality, appealing to riders with diverse tastes and preferences.

Motorcycling is more than a mode of transport; it's a visceral connection with the road and the elements. Riding a motorcycle is an immersive experience, a dance between man and machine. The sense of control and the intimate connection with the road beneath provide an unparalleled thrill, making every ride a symphony of adrenaline and freedom.

The motorcycle lifestyle extends beyond the mechanical aspects, encompassing a tight-knit community bonded by a shared passion. Biker culture is a vibrant tapestry woven with stories of road trips, rallies, and the unspoken camaraderie among riders. Whether cruising on scenic routes or attending motorcycle events, the community fosters a sense of belonging and mutual respect among its members.</p>
      </div>
    </div>
  )
}
