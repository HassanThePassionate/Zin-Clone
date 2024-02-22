import Image from "next/image";
import Link from "next/link";

const Converter = (props) => {
  return (
    <>
      <main className={`main ${props.mode === "dark" ? "dark-main" : "main"}`}>
        <section className="container slider">
          <h2>Convert to PDF</h2>
          <div className="grid">
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
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <Link href="https://www.hipdf.com/word-to-pdf" className="card">
                <Image
                  src="https://images.hipdf.com/images2022/icons/word-pdf.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>Word to PDF</h3>
                <p>The best Word to PDF converter online.</p>
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
                  src="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PPT to PDF</h3>
                <p>Convert Powerpoint to PDF online.</p>
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
                  src="https://images.hipdf.com/images2022/icons/Excel-PDF.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>Excel to PDF</h3>
                <p>Easily Convert Excel spreadsheet to PDF.</p>
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
                  src="https://images.hipdf.com/images2022/icons/jpg-pdf.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>JPG to PDF</h3>
                <p>Convert JPG, PNG, BMP, GIF and TIFF images to PDF.</p>
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
                  src="https://images.hipdf.com/images2022/icons/Image-in-TXT.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>TXT to PDF</h3>
                <p>Convert TXT to PDF online for free.</p>
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
                  src="https://images.hipdf.com/images2022/icons/Image-in-RTX.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>RTF to PDF</h3>
                <p>Convert RTF file to PDF online for free.</p>
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
                  src="https://images.hipdf.com/images2022/icons/Excel-PUB.svg"
                  alt=""
                  width={65}
                  height={65}
                />
                <h3>PUB to PDF</h3>
                <p>Convert Publisher to PDF document.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Converter;
