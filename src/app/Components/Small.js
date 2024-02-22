import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Small = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    setShowSuggestion(true);
  };
  const cancel = () => {
    const full = document.querySelector(".full");
    full.style.display = "none";
  };

  return (
    <>
      <div className="full">
        <div className="small-flex">
          <input
            type="text"
            placeholder="Search for Movies, TV Shows, Themes &amp; Cast"
            class="input"
            value={input}
            onChange={handleChange}
          />
          <Link href="/" onClick={cancel}>
            Cancel
          </Link>
        </div>
        <ul className="small-list">
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/pdf-word.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to Word</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/PDF-PPT.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to PPT</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/pdf-excel.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to Excel</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/PDF-JPG.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to JPG</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/PDF-TXT.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to TXT</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/PDF-RTX.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to RTX</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/pdf-html.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to HTML</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/PDF-Pages.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to Pages</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/PDF-DXF.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to DXF</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/PDF-EPUB.svg"
              width={20}
              height={20}
            />
            <p className="paras">PDF to EPUB</p>
          </li>
          <li>
            <Image
              src="https://images.hipdf.com/images2022/icons/OCR.svg"
              width={20}
              height={20}
            />
            <p className="paras">OCR</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Small;
