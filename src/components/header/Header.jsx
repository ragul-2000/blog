import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg" alt=""
         className="headerImg" />
    </div>
  )
}
