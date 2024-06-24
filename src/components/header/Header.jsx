import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperbat.com/img/871965-imagine-dragons-4k-ultra-hd-wallpaper.jpg"
        alt=""
      />
    </div>
  );
}
