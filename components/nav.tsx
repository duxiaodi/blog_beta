import githubIcon from "../assets/images/github.svg";
import twitterIcon from "../assets/images/twitter.svg";

// TODO: 完善跳转逻辑
function Nav() {
  return (
    <nav className="cursor-pointer text-white flex items-center gap-6">
      <a className="nav-a text-13">HOME</a>
      <a className="nav-a text-13">ARCHIVE</a>
      <a className="nav-a text-13">CATEGORIES</a>
      <a className="nav-a text-13">RESUME</a>
      <a className="nav-a">
        <img src={githubIcon.src} alt="github" className="h-5 w-5" />
      </a>
      <a className="nav-a">
        <img src={twitterIcon.src} alt="twitter" className="h-5 w-5" />
      </a>
    </nav>
  );
}

export default Nav;
