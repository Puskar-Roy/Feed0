import { useState, useEffect } from "react";
import PostComp from "./PostComp";
import{ useNavigate }from 'react-router-dom'
import axios from "axios";
function Posts() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.posts);
        console.log(response.data.userData);
        setData(response.data.posts);
      })
      .catch((error) =>{
        console.log(error);
        navigate('/login');

      });
  }, []);

  return (
    <div>
      <PostComp posts={data} />
    </div>
  );
}

export default Posts;
