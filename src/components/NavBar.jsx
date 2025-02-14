import Logo from "./Logo";
import { FaSearch, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function NavBar() {
  return (
    <header className="w-full flex justify-center sticky top-0 py-2 bg-bg_dark">
      <div className="flex justify-between items center max-w-container flex-1 px-4 py-4">
        <div className="flex gap-4 items-center divide-x-2 divide-main_white-30 ">
          <Logo />
          <nav>
            <ul className="flex justify-between items-center pl-4 gap-8 ">
              <li>
                <a href="">
                  🏠 <span className="hover:text-main_pink-100">Home</span>
                </a>
              </li>
              <li>
                <a href="">📰 Blog</a>
              </li>
              <li>
                <a href="">🏫 KFUPM</a>
              </li>
              <li>
                <a href="">🏗️ Projects</a>
              </li>
              <li>
                <a href="">📖 About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center gap-8 text-lg ">
          <div className="flex gap-8 items-center h-full ">
            <button
              type="button"
              className="font-thin hover:text-main_yellow-100"
            >
              <FaSearch />
            </button>
            <a
              href="https://github.com/Moath-COE"
              target="_blank"
              className="icon"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/moaz-abdelaziz-7a8461236/"
              target="_blank"
              className="icon"
            >
              <FaLinkedin />
            </a>
            <a href="https://x.com/Moath_COE" target="_blank" className="icon">
              <FaSquareXTwitter />
            </a>
          </div>
          <button type="button" className="btn_n relative">
            Subscribe 🔔
            <span class="absolute flex size-4 top-[-4px] right-[-4px]">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <span class="relative inline-flex size-4 rounded-full bg-yellow-500"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
