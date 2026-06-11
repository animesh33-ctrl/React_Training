import photo from "../assests/photo.jpg";
import iem from "../assests/iem.png";

const TechnoPager = () => {
  return (
    <main className="max-w-280 mx-auto my-7.5">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
        {/* HEADER */}
        <div className="relative flex items-center gap-5 min-h-55 px-7.5 pr-82.5 py-7.5 overflow-hidden bg-linear-to-r from-[#1f5f85] to-[#1a3a5c]">
          <div
            className="absolute top-0 right-0 w-[62%] h-full bg-white z-1"
            style={{
              clipPath: "polygon(23% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />

          <div className="relative z-2">
            <img
              src={photo}
              alt="Profile"
              className="w-20 h-20 rounded-full border-[3px] border-white object-cover"
            />
          </div>

          <div className="relative z-2">
            <h1 className="text-white text-[1.6rem] font-bold">
              Animesh Palui
            </h1>

            <p className="text-[#b0cce0] text-sm mt-1">Pune India</p>
            <p className="text-[#b0cce0] text-sm mt-1">
              paluianimesh31@gmail.com
            </p>
            <p className="text-[#b0cce0] text-sm mt-1">8918767902</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[58%] h-55 flex flex-col items-start justify-start pt-4.5 pb-4.5 pl-23 pr-7.5 z-2">
          <div className="hidden">
            <h2 className="text-[2.8rem] text-[#1e5f96] italic font-semibold">
              IEM
            </h2>
          </div>

          <div>
            <img src={iem} alt="IEM" className="h-9 ml-65 block" />
          </div>

          <div>
            <p className="text-[#3e4d58] text-[0.95rem] leading-[1.45] font-semibold mt-9.5 max-w-130 text-center">
              Software Engineer experienced in Java, React, SQL. Focused on
              building responsive web applications.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="flex relative overflow-hidden">
          {/* CERTIFICATIONS */}
          <div className="w-[35%] p-6 relative z-1">
            <div
              className="absolute -left-2.5 -top-6 w-[calc(100%+60px)] h-[calc(100%+130px)] bg-[#f1f3f5] z-[-1]"
              style={{
                borderTopRightRadius: "130px",
                borderBottomRightRadius: "130px",
              }}
            />

            <h4 className="text-[#1a6aaa] text-[1.1rem] mb-3.5 font-semibold">
              Certifications
            </h4>

            <div className="bg-white rounded-md p-2 m-6.75 border border-[#1a3a5c]">
              <p className="text-[#1a6aaa] font-bold">Java Certificate</p>
            </div>

            <div className="bg-white rounded-md p-2 m-6.75 border border-[#1a3a5c]">
              <p className="text-[#1a6aaa] font-bold">
                Machine Learning with Python
              </p>
            </div>

            <div className="bg-white rounded-md p-2 m-6.75 border border-[#1a3a5c]">
              <p className="text-[#1a6aaa] font-bold">AWS Fundamentals</p>
            </div>

            <div className="m-2.5 mt-5 text-[#1a6aaa] italic text-[1.15rem] leading-[1.45] font-bold max-w-60">
              <p className="pl-0.75">
                "Creating effective solutions with React & SpringBoot"
              </p>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="w-[65%] py-6.5 pr-6 pb-6 pl-9 ml-13 bg-[#fff7f7]">
            <h3 className="text-[#1a6aaa] text-[1.2rem] mb-3.5 font-semibold">
              Key Projects
            </h3>

            <div className="bg-[#f8fafc] rounded-md py-4 px-5 border border-[#dde8f0] max-w-[39em]">
              <p className="text-[#1a6aaa] font-bold mb-2">
                Sign Language Recognition
              </p>

              <ul className="pl-4.5 text-[#444] text-[0.9rem] leading-[1.9] list-disc">
                <li>
                  Real-time sign language recognition system that translates
                  hand gestures into text.
                </li>

                <li>
                  Used public dataset like ISL and augmented with custom webcam
                  captures.
                </li>

                <li>
                  Preprocess frames → hand/keypoint detection → sequence
                  modeling (CNN + LSTM/Transformer) → post-processing for
                  smoothing and phrase detection.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="pt-4.5 px-6 pb-6">
          <table className="w-[60%] float-right text-[0.9rem] bg-[#fff7f7] rounded-[22px]">
            <thead>
              <tr>
                <th className="bg-[#dbeaf7] text-[#1a6aaa] py-2.5 px-3.5 text-center rounded-l-[14px]">
                  Technology
                </th>

                <th className="bg-[#dbeaf7] text-[#1a6aaa] py-2.5 px-3.5 text-center">
                  Experience Level
                </th>

                <th className="bg-[#dbeaf7] text-[#1a6aaa] py-2.5 px-3.5 text-center rounded-r-[14px]">
                  Months of Experience
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  Java Spring Boot
                </td>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  Intermediate
                </td>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  3
                </td>
              </tr>

              <tr>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  Python
                </td>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  Intermediate
                </td>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  8
                </td>
              </tr>

              <tr>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  SQL
                </td>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  Intermediate
                </td>
                <td className="py-2.5 px-3.5 text-center border-b border-[#e8f0f8]">
                  11
                </td>
              </tr>

              <tr>
                <td className="py-2.5 px-3.5 text-center">Machine Learning</td>
                <td className="py-2.5 px-3.5 text-center">Beginner</td>
                <td className="py-2.5 px-3.5 text-center">2</td>
              </tr>
            </tbody>
          </table>

          <div className="clear-both"></div>
        </div>
      </div>
    </main>
  );
};

export default TechnoPager;
