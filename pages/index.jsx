export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full max-w-md lg:max-w-6xl mx-auto text-r3 font-medium">
        <div className="flex flex-col gap-8">
          <p className="[text-wrap:balance;]">
            WEATHERLIGHT is the business studio of{" "}
            <nobr>
              <a
                href="https://www.baytas.net/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition-opacity underline"
              >
                Dr. M.A. Baytaş
              </a>
              ,
            </nobr>{" "}
            <span className="opacity-50">
              operating internationally and creating value through expertise in
              design and engineering.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p>
            Ventures <br />
            <a
              href="https://www.baytas.net/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              Studio M.A. Baytaş
            </a>
            <br />
            <a
              href="https://www.designdisciplin.com/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              Design Disciplin
            </a>
          </p>

          <p>
            Experiments <br />
            <a
              href="https://www.rektangle.design/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              Rektangle Design
            </a>
            <span className="opacity-50">, </span>
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
              href="https://intlcult.com/"
              target="_blank"
              rel="noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity underline"
            >
              International Cult of Design
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
            Bespoke Services <br />
            {[
              "Product Design",
              "Front-end Development",
              "Web App Development",
              "Design Engineering",
              "Design Leadership",
              "Startup Coaching",
            ].map((item) => {
              return (
                <>
                  <span className="opacity-50">{item}</span> <br />
                </>
              );
            })}
          </p>

          <p>
            Select Clients and Collaborators <br />
            {[
              ["ATÖLYE", "Istanbul, TR"],
              ["Chalmers University of Technology", "Gothenburg, SE"],
              ["Coherent", "Brooklyn, NY"],
              ["Dükkan Productions", "Istanbul, TR"],
              ["Hyper Island", "Stockholm, SE and Karlskrona, SE"],
              ["IT-Högskolan", "Gothenburg, SE"],
              ["KTH Royal Institute of Technology", "Stockholm, SE"],
              ["KWORKS", "Istanbul, TR"],
              ["Maple Technologies", "Valbonne, FR"],
              ["MidBrain", "Austin, TX"],
              ["MindBehind", "Istanbul, TR"],
              ["MLA | Machine Learning in Athletics", "Rome, IT"],
              ["Studio Griyer", "Istanbul, TR"],
              ["SXSW", "Austin, TX"],
              ["The Point Labs", "Gothenburg, SE and Timisoara, RO"],
              ["Volvo Cars", "Gothenburg, SE"],
              ["Vouch", "Austin, TX"],
            ].map((item) => {
              return (
                <>
                  <span className="opacity-50">{item[0]}</span>{" "}
                  <span className="opacity-50 text-r1">({item[1]})</span>
                  <span className="opacity-50">,</span>{" "}
                </>
              );
            })}
          </p>

          <p>
            Contact <br />
            <span className="opacity-50">firstcontact@weatherlight.com</span>
          </p>
        </div>
      </div>
    </>
  );
}
