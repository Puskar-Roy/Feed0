import { useState , useEffect } from "react";
import axios from "axios";

const dataa
= [
    {
        "_id": "64df6f5464048a6077ac9313",
        "name": "Puskar3",
        "department": "CSE",
        "batch": "2026",
        "college": "UIT BU",
        "email": "puskarroy0@gmail.com",
        "password": "$2a$12$NYqHWf9rsSuYp41y.mp0n.Nb/rs/gYhGaZIa22zmCVvwvQRY6BIBe",
        "cpassword": "$2a$12$OfFLi.z9orc7XBwXjP9HGeDICwv5BSNOZn5t0PijFKIrHhV/8g8om",
        "phone": 74495853648,
        "imagePublicId": "k1exbqxj2kohw6pdwfhl",
        "imageUrl": "https://res.cloudinary.com/dky3cpvtf/image/upload/v1692364640/k1exbqxj2kohw6pdwfhl.png",
        "__v": 0
    },
    {
        "_id": "64dfae106aa36a1039ebb621",
        "name": "Puskar4",
        "department": "CSE",
        "batch": "2026",
        "college": "UIT BU",
        "email": "puskarroy@gmail.com",
        "password": "$2a$12$CnCYWrAKoKdhaSFQi2KcI.hGda9xYHD2JZSEjPiWZqsCF7I6qgor2",
        "cpassword": "$2a$12$pOuaoTrQNIlcNZatgYRI/.XENXqDuvKi3XTurAKcXyI8WyPMIIkN.",
        "phone": 74495853688,
        "imagePublicId": "vuqxly2e31ggz0yuhjhw",
        "imageUrl": "https://res.cloudinary.com/dky3cpvtf/image/upload/v1692380700/vuqxly2e31ggz0yuhjhw.png",
        "__v": 0
    },
    {
        "_id": "64e037ea379f444e93807049",
        "name": "Puska Roy",
        "department": "CSE",
        "batch": "2026",
        "college": "UIT BU",
        "email": "jhon1@gmail.com",
        "password": "$2a$12$d3DQBGiKD4rBSa7yAvZ9jOh0JiDfgII5Ptpi6QxQ1HTgSz/JKfJ7S",
        "cpassword": "$2a$12$bVZzvhlJtL5IMA.kQSK5neTe2DZGIU.rjrUQPnOK.ZrBiV7gmO0/y",
        "phone": 123456789,
        "imagePublicId": "",
        "imageUrl": "",
        "__v": 0
    },
    {
        "_id": "64e08e82ab03f67d69a356cd",
        "name": "Puskar Roy",
        "department": "CSE",
        "batch": "2026",
        "college": "UIT BU",
        "email": "puskarroy600@gmail.com",
        "password": "$2a$12$0X0h9XxoSPF9PaCabEa1DuTkQgus/uHw3eY6h2qNUWeVCQraHClum",
        "cpassword": "$2a$12$42qeI/gZWq0X3gFFoXUXL.57lQ77GyUBIJjYcr7qwWx6KhlZxHWFa",
        "phone": 7449585365,
        "imagePublicId": "m6kak89w6sbyclbtd7b3",
        "imageUrl": "https://res.cloudinary.com/dky3cpvtf/image/upload/v1692438159/m6kak89w6sbyclbtd7b3.jpg",
        "__v": 0
    }
]

function StoryComp() {
    // const [dataa, setData] = useState([]);
    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:8000/api/users`, {
    //       withCredentials: true,
    //     })
    //     .then((response) => {
    //       setData(response.data);
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, []);

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
