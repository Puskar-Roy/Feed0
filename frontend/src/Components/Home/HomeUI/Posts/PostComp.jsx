import { FaThumbsUp, FaThumbsDown, FaComment, FaShare } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import axios from 'axios';
import { useState , useEffect} from 'react'
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
function PostComp({ posts }) {
  //  const [data, setData] = useState([]);
  //  useEffect(() => {
  //    axios
  //      .get(`http://localhost:8000/api/posts`, {
  //        withCredentials: true,
  //      })
  //      .then((response) => {
  //       console.log(response.data.userData._id);
  //        setData(response.data.userData);
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  }, []);

   const handleLike = async (postId) => {
     try {
       const response = await axios.post(
         `http://localhost:8000/api/posts/${postId}/${data._id}`
       );
       if (response) {
         console.log("Like Done");// Refresh the posts after updating like status
       }
     } catch (error) {
       console.error("Error liking post:", error);
     }
   };
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 shadow-xl rounded-2xl mb-4">
          <div className="flex items-center">
            <img
              src={post.public_imageUrl}
              alt={`${post.author}'s profile`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-gray-500 text-sm">{post.timestamp}</p>
            </div>
          </div>
          <p className="mt-3">{post.content}</p>

          <div className="flex mt-4 justify-between">
            <div className="flex items-center space-x-2">
              <FaThumbsUp onClick={()=>handleLike(post._id)} className="text-blue-600" />
              <span>{post.likes.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaThumbsDown className="text-gray-600" />
              {/* <span>{post.dislikes}</span> */}
            </div>
            <div className="flex items-center space-x-2 ">
              <FaComment className="text-gray-600" />
              <span>{post.comments.length}</span>
            </div>
            <div className="flex items-center space-x-2 ">
              <FaShare className="text-gray-600" />
            </div>
            <div className="flex items-center space-x-2 ">
              <FaEllipsisVertical className="text-gray-600" />
            </div>
          </div>
          {/* <div>
            {post._id}
        </div> */}
        </div>
      ))}
    </div>
  );
}

export default PostComp;
