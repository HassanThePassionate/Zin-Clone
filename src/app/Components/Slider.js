import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Bookmark from "@/assets/icons/Bookmark";
import { useState } from "react";

const data = [
  {
    title: "PDF to Word",
    desc: "Easily convert PDF to Word document.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
  },
  {
    title: "PDF to PPT",
    desc: "Convert PDF to Powerpoint online.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
  },
  {
    title: "PDF to Excel",
    desc: "Convert PDF to xls for free.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
  },
  {
    title: "PDF to JPG",
    desc: "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
  },
  {
    title: "PDF to TXT",
    desc: "Convert your PDF to TXT, and extract text from your PDF.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
  },
  {
    title: "PDF to RTX",
    desc: "Convert PDF to RTF online and free.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
  },
  {
    title: "PDF to Pages",
    desc: "Convert PDF to Pages on Mac and Windows.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
  },
  {
    title: "PDF to HTML",
    desc: "Convert your PDF documents to HTML web page.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
  },
  {
    title: "PDF to DXF",
    desc: "The best online tool to convert PDF to DXF online.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/PDF-DXF.svg",
  },
  {
    title: "PDF to EPUB",
    desc: "Convert PDF file to EPUB ebook.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/PDF-EPUB.svg",
  },
  {
    title: "OCR",
    desc: " Convert your scanned PDFs and images into editable Word,Excel, and PPT.",
    icons: <Bookmark />,
    url: "https://www.hipdf.com/word-to-pdf",
    image: "https://images.hipdf.com/images2022/icons/OCR.svg",
  },
];

const Slider = (props) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <>
      <main className={`main ${props.mode === "dark" ? "dark-main" : "main"}`}>
        <section className="container slider">
          <h2>Convert from PDF</h2>
          <div className="slider-content">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              navigation={{
                nextEl: "next",
                prevEl: "prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.map((e) => {
                return (
                  <>
                    <SwiperSlide>
                      <div className="relate">
                        <div className="btn-book" key={e.image}>
                          {e.icons}
                        </div>

                        <Link href={e.url} key={e.image} className="card">
                          <Image
                            src={e.image}
                            alt="images"
                            width={65}
                            height={65}
                            className="card-img"
                          />
                          <h3>{e.title}</h3>
                          <p>{e.desc}</p>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>

            <div className="slider-btns">
              {props.mode === "dark" ? (
                <>
                  <div id="prev" onClick={goPrev}>
                    <svg
                      style={{ color: "white" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-arrow-left-circle"
                      viewBox="0 0 16 16"
                      stroke-width="0.3"
                      stroke="#fff"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                        fill="white"
                      ></path>{" "}
                    </svg>
                  </div>
                  <div id="next" onClick={goNext}>
                    <svg
                      style={{ color: "white" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                      stroke-width="0.3"
                      stroke="#fff"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        fill="white"
                      ></path>{" "}
                    </svg>
                  </div>
                </>
              ) : (
                <>
                  <div id="prev" onClick={goPrev}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-arrow-left-circle"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                        id="mainIconPathAttribute"
                        stroke-width="0.3"
                        stroke="#000000"
                      ></path>{" "}
                    </svg>
                  </div>
                  <div id="next" onClick={goNext}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                      stroke-width="0.3"
                      stroke="#000000"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />{" "}
                    </svg>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Slider;
