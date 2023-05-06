export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full max-w-md lg:max-w-6xl mx-auto text-r3 font-medium">
        <div className="flex flex-col gap-8">
          <p className="">
            WEATHERLIGHT is the venture studio of{" "}
            <nobr>
              <a
                href="https://www.baytas.net/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition-opacity underline"
              >
                Dr. Mehmet Aydın Baytaş
              </a>
            </nobr>
            .
          </p>

          <p className="opacity-50">
            WEATHERLIGHT builds design-focused products, services, and media for
            a world defined by curiosity, innovation, and artful expression.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p>
            Expertise:{" "}
            <span className="opacity-50">
              digital product design and engineering, digital brand and content,
              design education
            </span>
          </p>

          <p>
            Ventures:{" "}
            <a
              href="https://www.designdisciplin.com/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              Design Disciplin
            </a>
            <span className="opacity-50">, </span>
            <a
              href="https://www.rektangle.design/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              Rektangle
            </a>
          </p>

          <p>
            Experiments:{" "}
            <a
              href="https://aidesignfiction.com/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              AI Design Fiction
            </a>
            <span className="opacity-50">, </span>
            <a
              href="https://www.citationsnft.com/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              Citations Collection
            </a>
            <span className="opacity-50">, </span>
            <a
              href="https://navigator.designdisciplin.com/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              Design Navigator
            </a>
            <span className="opacity-50">, </span>
            <a
              href="https://www.vv.ventures/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              VV.Ventures
            </a>
          </p>

          <p>
            Selected clients and collaborators:{" "}
            <span className="opacity-50">
              {" "}
              Atölye, Chalmers University of Technology, Dükkan Productions,
              Hyper Island, IT-Högskolan, KTH Royal Institute of Technology,
              MindBehind, The Point Labs, Volvo Cars
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
