import React from "react";

function AddSpeaker() {
  return (
    <div className="flex items-center justify-center ml-72">
      <div
        className="bg-gray-400 rounded-md shadow-2xl shadow-blue-800 flex items-center px-20 py-10"
        style={{ transform: "scale(0.8)" }}
      >
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="eventName" className="text-black">
              Speaker Name
            </label>
            <input
              type="text"
              className="text-black px-4 py-2 border-2 border-gray-500"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="eventName" className="text-black">
              Speaker Availability
            </label>
            <input
              type="text"
              className="text-black px-4 py-2 border-2 border-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSpeaker;
