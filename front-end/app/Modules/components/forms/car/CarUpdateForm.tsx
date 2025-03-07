import React, { useState } from "react";
import axios from "axios";
export default function CarUpdateForm(props: any) {
  const [model, setModel] = useState("");
  const [brandName, setBrandName] = useState("");
  const [serialNum, setSerialNum] = useState("");
  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full flex justify-center flex items-center "
    >
      <div className="relative w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-bg-transparent">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                props.hide(false);
              }}
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="py-6 px-6 lg:px-8">
            <form className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Model
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Model Name"
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Brand
                </label>
                <input
                  type="text"
                  placeholder="Brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={(e) => {
                    setBrandName(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Serial Number
                </label>
                <input
                  type="text"
                  placeholder="Serial Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  onChange={(e) => {
                    setSerialNum(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5"></div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  let newCar = {
                    model: model,
                    brandName: brandName,
                    serialNum: serialNum,
                  };
                  axios
                    .put(`http://localhost:3000/api/cars/${props.car}`, newCar)
                    .then(() => alert("done"))
                    .catch(() => alert("error"));
                }}
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
