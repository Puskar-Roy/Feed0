import { useState, useEffect } from "react";
import PostComp from "./PostComp";
import{ useNavigate }from 'react-router-dom'
import axios from "axios";

const data = [
  {
    _id: "64e0f7679c4e8a333125aca8",
    author: "Puskar Roy",
    content: "My First Post",
    likes: [
      {
        timestamp: "2023-08-19T17:10:08.529Z",
        _id: "64e0f7709c4e8a333125acb8",
      },
      {
        timestamp: "2023-08-19T17:10:25.203Z",
        _id: "64e0f7819c4e8a333125accf",
      },
      {
        timestamp: "2023-08-19T17:20:51.270Z",
        _id: "64e0f9f39c4e8a333125aced",
      },
      {
        timestamp: "2023-08-19T17:26:26.485Z",
        _id: "64e0fb429c4e8a333125ad4a",
      },
      {
        timestamp: "2023-08-19T17:27:46.049Z",
        _id: "64e0fb929c4e8a333125ad76",
      },
      {
        timestamp: "2023-08-19T17:27:47.218Z",
        _id: "64e0fb939c4e8a333125ad7d",
      },
    ],
    comments: [],
    public_imagePublicId: "",
    public_imageUrl: "",
    createdAt: "2023-08-19T17:09:59.347Z",
    updatedAt: "2023-08-19T17:27:47.218Z",
    __v: 0,
  },
];
function Posts() {
  // const navigate = useNavigate();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/posts`, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       console.log(response.data.posts);
  //       console.log(response.data.userData);
  //       setData(response.data.posts);
  //     })
  //     .catch((error) =>{
  //       console.log(error);
  //       navigate('/login');

  //     });
  // }, []);

  return (
    <div>
      <PostComp posts={data} />
    </div>
  );
}

export default Posts;
