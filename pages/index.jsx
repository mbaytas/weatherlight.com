export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full max-w-md lg:max-w-6xl mx-auto text-r3 font-medium">
        <div className="flex flex-col gap-8">
          <p className="">
            WEATHERLIGHT is the studio practice of designer and engineer{" "}
            <a
              href="https://www.baytas.net/"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              dr. M.A. Baytaş
            </a>
            .
          </p>

          <p className="opacity-50">
            WEATHERLIGHT builds digital products and media to realize a new
            world order defined by purpose, curiosity, and artful expression.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p>
            Expertise:{" "}
            <span className="opacity-50">
              digital product design and engineering, digital-first brand
              identity design, design learning and education.
            </span>
          </p>

          <p>
            Selected projects:{" "}
            <a
              href="https://www.designdisciplin.com/"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              Design Disciplin
            </a>
          </p>

          <p>
            Selected clients and collaborators:{" "}
            <span className="opacity-50">
              {" "}
              Atölye, Chalmers University of Technology, Dükkan Productions, KTH
              Royal Institute of Technology, MindBehind, Qualisys, The Point
              Labs, Volvo Cars
            </span>
          </p>

          <p>
            Contact: <span className="opacity-50">firstcontact@...</span>
          </p>
        </div>
      </div>
    </>
  );
}
