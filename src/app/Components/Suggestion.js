import Image from "next/image";
import React from "react";

const Suggestion = (props) => {
  const data = [
    {
      title: "PDF to Word",
      image: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
    },
    {
      title: "PDF to PPT",
      image: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
    },
    {
      title: "PDF to Excel",
      image: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
    },
    {
      title: "PDF to JPG",
      image: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
    },
    {
      title: "PDF to TXT",
      image: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
    },
    {
      title: "PDF to RTX",
      image: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
    },
    {
      title: "PDF to Pages",
      image: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
    },
    {
      title: "PDF to HTML",
      image: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
    },
    {
      title: "PDF to DXF",
      image: "https://images.hipdf.com/images2022/icons/PDF-DXF.svg",
    },
    {
      title: "PDF to EPUB",
      image: "https://images.hipdf.com/images2022/icons/PDF-EPUB.svg",
    },
    {
      title: "OCR",
      image: "https://images.hipdf.com/images2022/icons/OCR.svg",
    },
  ];
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(props.input.toLowerCase())
  );
  return (
    <>
      {props.show === true ? (
        <>
          <div className="suggestion">
            <p className="keyword">KEYWORD</p>
            <ul className="suggestion-list">
              {filteredData.map((item) => (
                <li key={item.title}>
                  <Image src={item.image} width={30} height={30} />
                  <p className="para">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Suggestion;
