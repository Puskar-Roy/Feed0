import { useState , useEffect } from "react";
import axios from "axios";

function StoryComp() {
    const [dataa, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8000/api/users`, {
          withCredentials: true,
        })
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <div className=" flex  p-4 overflow-x-auto no-scrollbar">
      <div>
      </div>
      {dataa.map((person, index) => (
        <div key={index} className="text-sm text-center mr-4">
          <div
            // className={`p-1 border-4 ${
            //   person.online ? "border-transparent" : "border-blue-600"
            // } rounded-full`}
          >
            <div className="w-16 h-16 relative flex flex-shrink-0">
              <img
                className="shadow-md rounded-full w-full h-full object-cover"
                src={person.imageUrl}
                alt=""
              />
              {person.online && (
                <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                  <div className="bg-green-500 rounded-full w-3 h-3"></div>
                </div>
              )}
            </div>
          </div>
          <p>{person.name}</p>
        </div>
      ))} 
    </div>
  );
}

export default StoryComp;
