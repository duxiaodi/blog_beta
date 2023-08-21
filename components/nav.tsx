import Link from "next/link";
import githubIcon from "../assets/images/github.svg";
import twitterIcon from "../assets/images/twitter.svg";

// TODO: 完善跳转逻辑
function Nav() {
  return (
    <nav className="flex items-center gap-3 md:gap-6 text-12 sm:text-13">
      <Link as={`/`} href="/" className="cursor-pointer">
        HOME
      </Link>
      <a>ARCHIVE</a>
      <a>CATEGORIES</a>
      <a>RESUME</a>
      <Link
        as="https://github.com/sylvenas"
        href="https://github.com/sylvenas"
        className="cursor-pointer"
        target="_blank"
      >
        <img
          src={githubIcon.src}
          alt="github"
          className="h-5 w-5 flex-shrink-0"
        />
      </Link>
      <Link
        as="https://twitter.com/TaoZhao_"
        href="https://twitter.com/TaoZhao_"
        className="cursor-pointer"
        target="_blank"
      >
        <img
          src={twitterIcon.src}
          alt="twitter"
          className="h-5 w-5 flex-shrink-0"
        />
      </Link>
    </nav>
  );
}

export default Nav;
