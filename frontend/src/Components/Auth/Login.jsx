import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const registerUserSubmit = async () => {
    if (!email || !password) {
      toast.error("Please fill all required fields!");
    } else {
      try {
        await axios.post(
          `http://localhost:8000/api/`,
          { email: email, password: password },
          {
            withCredentials: true,
          }
        );
        toast.success("Login Done!");
        setTimeout(() => {
          navigate("/");
        }, Math.floor(Math.random() * 1001) + 700);
      } catch (error) {
        console.log(error);
        toast.error("Login Failed!");
      }
    }
  };

  return (
    <div>
      <Toaster />
      <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
        <div className="h-fit w-fit mx-auto flex flex-col items-center">
          <img className="w-32 mb-5" src="/Doraemon.png" alt="" />

          <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-4 text-sm">
            <h1 className="text-xl font-bold text-center pb-5">
              Login to your account
            </h1>
            <div className="w-[26rem]">
              <input
                onChange={handleEmailChange}
                value={email}
                className="border border-gray-400 focus:outline-blue-500 rounded-lg w-full shadow-sm px-3 py-2"
                type="email"
                name="email"
                placeholder=" Email / Phone Number / @UserName"
              />
            </div>
            <div className="">
              <input
                onChange={handlePasswordChange}
                value={password}
                className="border border-gray-400 focus:outline-blue-500 rounded-lg w-full shadow-sm px-3 py-2"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div className="mx-auto">
              <input
                onClick={registerUserSubmit}
                className="bg-blue-300 w-fit  px-10 py-2 rounded-[16px] text-white font-bold cursor-pointer hover:bg-blue-500"
                type="submit"
                value="Login"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <p class="text-sm">
                <a href="/forgot" class="text-indigo-400 hover:text-blue-500">
                  Forgot password?
                </a>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-center pb-3">Or Continue with</p>

              <div className="flex gap-4">
                <button className="bg-white flex items-center outline outline-gray-300 justify-center hover:text-white space-x-3 w-1/2 py-1 rounded-lg text-black font-bold cursor-pointer hover:bg-blue-500">
                  <FcGoogle /> <span>Google</span>
                </button>
                <button className="bg-black flex items-center space-x-3 justify-center w-1/2 py-1 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-500">
                  <FaGithub /> <span> Github</span>
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-10 flex space-x-6 justify-center">
              <span>Don't have an account ?</span>
              <a href="/register" className="text-[#4F46E5] font-bold">
                Register Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
