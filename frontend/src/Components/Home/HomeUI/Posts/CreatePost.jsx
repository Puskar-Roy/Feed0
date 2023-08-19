import { useState , useEffect} from "react";
import { FaVideo, FaImage, FaPollH, FaSmile } from "react-icons/fa";
import axios from "axios";

function CreatePost() {
  const [activeTab, setActiveTab] = useState("normal");
  // const [dataa,setData] = useState();
  const[post , Setpost] = useState('');
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/posts`, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       setData(response.data.userData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handelPost = async ()=>{
    console.log(post);
    // const postData = axios.post(`http://localhost:8000/api/posts`,{author:dataa.name , content:post}, {
    //   withCredentials: true,
    // });
    // if(postData){
    //   window.alert("Post Done Reload")
    // }else{
    //   window.alert("Not Done")
    // }

  }

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
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvMxfKkeZ58-ytifqHPrI38BVn9jDdwf-pg&usqp=CAU"
            alt="ddd"
          />
          {/* {dataa && dataa.imageUrl ? (
            <img
              className="h-10 w-10 rounded-full"
              src={dataa.imageUrl}
              alt="ddd"
            />
          ) : null} */}
        </div>
        <div className="flex-1 px-2">
          <textarea
            className={`bg-gray-200 rounded-xl text-gray-700 font-medium text-lg w-full outline outline-blue-400 resize-none placeholder-gray-600 ${
              activeTab === "incognito" ? "bg-gray-300" : ""
            }`}
            rows="3"
            onChange={(e) => {
              Setpost(e.target.value);
            }}
            value={post}
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
          onClick={handelPost}
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
