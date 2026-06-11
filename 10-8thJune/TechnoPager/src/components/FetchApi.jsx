import React from "react";
import { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";

const FetchApi = () => {
  const [dataValues, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0]);
        setData(data);
      });
  }, []);

  return (
    <div className="w-[80vw] min-h-[50vh] bg-zinc-900/80 backdrop-blur-md rounded-3xl p-6 flex flex-wrap gap-6 justify-center overflow-auto border border-zinc-800">
      <h1 className="text-center w-full text-4xl mb-2 font-bold font-sans">
        Users Details
      </h1>
      {dataValues.map((item) => (
        <div
          key={item.id}
          className="w-104 bg-zinc-800 rounded-2xl p-6 shadow-lg shadow-black/30 hover:shadow-cyan-500/10 hover:-translate-y-2 
          transition-all duration-300 border border-zinc-700 font-serif"
        >
          <h2 className="text-2xl font-bold text-white text-center">
            {item.name}
          </h2>

          <p className="text-center text-cyan-400 mb-5">{item.email}</p>

          <div className="space-y-3 text-zinc-300">
            <p>
              <span className="font-semibold">
                <MdLocationPin className="inline mr-1 text-3xl text-cyan-400 pb-1.25 -ml-0.5" />
              </span>{" "}
              {item.address.suite}, {item.address.street}, {item.address.city},{" "}
              {item.address.zipcode}
            </p>

            <p className="flex items-center gap-2">
              <span className="font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill inline text-cyan-400"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </span>

              {item.phone}
            </p>

            <p>
              <span className="font-semibold">🌐 Website:</span> {item.website}
            </p>

            <p>
              <span className="font-semibold">🏢 Company:</span>{" "}
              {item.company.name}
            </p>

            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
              <p className="font-medium text-gray-800">
                "{item.company.catchPhrase}"
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.company.bs}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchApi;
