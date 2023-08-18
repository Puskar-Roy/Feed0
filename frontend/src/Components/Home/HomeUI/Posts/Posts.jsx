import { useState, useEffect } from "react";
import PostComp from "./PostComp";
import axios from "axios";
function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PostComp posts={data} />
    </div>
  );
}

export default Posts;
