"use client";
import { useState } from "react";
import Converter from "./Components/Converter";
import Cpdf from "./Components/Cpdf";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

const Page = () => {
  const [mode, setMode] = useState("light");
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
      <Navbar mode={mode} />
      <Slider mode={mode} />
      <Converter mode={mode} />
      <Cpdf mode={mode} />
      <Footer mode={mode} toggle={toggle} />
    </>
  );
};

export default Page;
