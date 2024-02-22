"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Small from "./Small";
import Navbtn from "./Navbtn";
import Suggestion from "./Suggestion";
import debounce from "lodash.debounce";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [input, setInput] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const suggestionRef = useRef(null);

  const [rotate, setRotate] = useState(0);
  const handle = () => {
    const by = document.getElementsByClassName("drop-icon")[0];
    if (rotate === 0) {
      setRotate(1);
      by.style.transform = "rotate(180deg)";
    } else {
      setRotate(0);
      by.style.transform = "rotate(0)";
    }
  };

  const handleSearch = () => {
    document.querySelector(".full").style.display = "inline-block";
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setShowSuggestion(true);
  };
  // Search debouncing...
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 200);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setShowSuggestion(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className={`light  ${props.mode === "dark" ? "dark-nav" : "light"}`}>
        <Small />
      </div>
      <header
        className={`header ${props.mode === "dark" ? "dark-nav" : "header"}`}
      >
        <div class="container">
          <Link href="index.html" class="logo">
            <Logo />
          </Link>

          <div class="flex-box">
            <div class="search-bar">
              <input
                type="text"
                placeholder="Search for Movies, TV Shows, Themes &amp; Cast"
                class="input"
                value={input}
                onChange={handleChange}
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </span>
              <div ref={suggestionRef}>
                <Suggestion show={showSuggestion} input={input} />
              </div>
            </div>
            <span className="search-icon">
              <svg
                onClick={handleSearch}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </span>

            <div className="menu-icon">
              <span className="menu" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-text-primary"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </span>
            </div>
          </div>

          <Navbtn />
        </div>

        <nav class={`navbar ${showMenu ? "tx" : "ty"}`}>
          <div className="cross" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </div>

          <div class="container">
            <ul class="list-iteams">
              <li class="relative">
                <Link class="group-link" href="/">
                  Stock Video
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Video Templates
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Music
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Sound Effects
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Graphic Templates
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Graphics
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Presentation Templates
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Photos
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Fonts
                </Link>
              </li>
              <li class="relative">
                <Link class="group-link" href="/">
                  Add-ons
                </Link>
              </li>
              <li class="relative group hid">
                <span class="group-link">More</span>
                <ul class="dropdown">
                  <li>
                    <Link href="">Another Link</Link>
                  </li>
                  <li>
                    <Link href="">Yet Another Link</Link>
                  </li>
                </ul>
              </li>
              <li class="relative none group" onClick={handle}>
                <details className="gp">
                  <summary className="gt">
                    <div className="lp">
                      <span class="group-link block">More</span>
                    </div>
                    <span className="drop-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <ul class="dropdown-none">
                    <li>
                      <Link href="" className="de">
                        Another Link
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="de">
                        Yet Another Link
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <div class="nav-btns">
                <Link class="nav-btn" href="/">
                  Log in
                </Link>
                <Link class="nav2-btn" href="/">
                  Sign up
                </Link>
              </div>
            </ul>

            <Link href="" class="more-btn">
              More
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
