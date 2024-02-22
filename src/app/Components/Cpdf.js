import Image from "next/image";
import Link from "next/link";

const Cpdf = (props) => {
  return (
    <>
      <main
        className={`main last-main ${
          props.mode === "dark" ? "dark-main" : "main"
        }`}
      >
        <section className="container slider">
          <h2>Convert from PDF</h2>
          <div className="grid">
            <div className="relate">
              <div className="btn-book">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/pdf-word.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to Word</h3>
                <p>Easily convert PDF to Word document.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/PDF-PPT.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to PPT</h3>
                <p>Convert PDF to Powerpoint online.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/pdf-excel.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to Excel</h3>
                <p>Convert PDF to xls for free.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/PDF-JPG.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to JPG</h3>
                <p>
                  Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or
                  TIFF images.
                </p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/PDF-TXT.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to TXT</h3>
                <p>Convert your PDF to TXT, and extract text from your PDF.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/PDF-RTX.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to RTF</h3>
                <p>Convert PDF to RTF online and free.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/PDF-Pages.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to Pages</h3>
                <p>Convert PDF to Pages on Mac and Windows.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/pdf-html.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to HTML</h3>
                <p>Convert your PDF documents to HTML web page.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/PDF-DXF.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to DXF</h3>
                <p>The best online tool to convert PDF to DXF online.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/PDF-EPUB.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PDF to EPUB</h3>
                <p>Convert PDF file to EPUB ebook.</p>
              </Link>
            </div>

            <div className="relate">
              <div className="btn-book">
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
                  className=""
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/OCR.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>OCR</h3>
                <p>
                  Convert your scanned PDFs and images into editable Word,
                  Excel, and PPT.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cpdf;
