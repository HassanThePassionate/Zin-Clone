"use client";
import { useState } from "react";
import Converter from "./Components/Converter";
import Cpdf from "./Components/Cpdf";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Bookmark from "./Components/Bookmark";
import { Provider } from "react-redux";
import store from "./redux/store";

const Page = () => {
  // const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [mode, setMode] = useState("light");

  // const toggleBookmark = (id) => {
  //   if (bookmarkedCards.includes(id)) {
  //     setBookmarkedCards(bookmarkedCards.filter((item) => item !== id));
  //   } else {
  //     setBookmarkedCards([...bookmarkedCards, id]);
  //   }
  // };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Provider store={store}>
        <Navbar mode={mode} />
        <Bookmark mode={mode} />
        <Slider mode={mode} />
        <Converter mode={mode} />
        <Cpdf mode={mode} />
        <Footer mode={mode} toggle={toggle} />
      </Provider>
    </>
  );
};

export default Page;
