import { useState } from "react";
import { FaVideo, FaImage, FaPollH, FaSmile } from "react-icons/fa";

function CreatePost() {
  const [activeTab, setActiveTab] = useState("normal");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`w-full ${
        activeTab === "incognito" ? "bg-purple-300" : "bg-white"
      } shadow-lg rounded-xl p-4 `}
    >
      <div className="mx-auto flex items-center justify-between mb-4">
        <div className="mx-auto space-x-4">
          <TabButton
            activeTab={activeTab}
            tab="normal"
            onClick={handleTabChange}
          >
            Normal
          </TabButton>
          <TabButton
            activeTab={activeTab}
            tab="incognito"
            onClick={handleTabChange}
          >
            Incognito
          </TabButton>
        </div>
      </div>
      <div className="flex">
        <div className="w-12 py-1">
          <img className="h-10 w-10 rounded-full" src="/Doraemon.png" alt="" />
        </div>
        <div className="flex-1 px-2">
          <textarea
            className={`bg-gray-200 rounded-xl text-gray-700 font-medium text-lg w-full outline outline-blue-400 resize-none placeholder-gray-600 ${
              activeTab === "incognito" ? "bg-gray-300" : ""
            }`}
            rows="3"
            placeholder={
              activeTab === "incognito"
                ? "You've gone incognito, Feed it."
                : "Feed it."
            }
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex space-x-5">
          <a
            href="#"
            className={`items-center ${
              activeTab === "incognito" ? "text-white" : "text-gray-400"
            } hover:text-sky-400`}
          >
            <FaImage className="h-6 w-6" />
          </a>
          <a
            href="#"
            className={`items-center ${
              activeTab === "incognito" ? "text-white" : "text-gray-400"
            } hover:text-sky-400`}
          >
            <FaVideo className="h-6 w-6" />
          </a>
          <a
            href="#"
            className={`items-center ${
              activeTab === "incognito" ? "text-white" : "text-gray-400"
            } hover:text-sky-400`}
          >
            <FaPollH className="h-6 w-6" />
          </a>
          <a
            href="#"
            className={`items-center ${
              activeTab === "incognito" ? "text-white" : "text-gray-400"
            } hover:text-sky-400`}
          >
            <FaSmile className="h-6 w-6" />
          </a>
        </div>
        <button
          className={` text-white font-bold py-2 px-5  ${
            activeTab === "incognito" ? "bg-purple-600" : "bg-blue-500"
          }  rounded-full hover:bg-blue-600 `}
        >
          Feed
        </button>
      </div>
    </div>
  );
}

function TabButton({ activeTab, tab, children, onClick }) {
  return (
    <button
      className={`p-2 outline outline-gray-300 mx-auto ${
        activeTab === tab
          ? "bg-blue-600 text-white"
          : "bg-gray-300 text-gray-700"
      } rounded-xl`}
      onClick={() => onClick(tab)}
    >
      {children}
    </button>
  );
}

export default CreatePost;
