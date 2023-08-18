import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
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
        <div className="h-max mx-auto flex flex-col items-center">
          <img
            className="h-[40px] w-[47px] mb-5"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
          <h1 className="text-xl font-bold text-center pb-10">
            Sign in to your account
          </h1>
          <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
            <div>
              <label
                className="text-gray-600 font-bold inline-block pb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={handleEmailChange}
                value={email}
                className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="email"
                name="email"
                placeholder="puskarroy@gmail.com"
              />
            </div>
            <div>
              <label
                className="text-gray-600 font-bold inline-block pb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                value={password}
                className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                type="password"
                name="password"
                placeholder="******"
              />
            </div>

            <div>
              <input
                onClick={registerUserSubmit}
                className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
                type="submit"
                value="Login"
              />
            </div>
            <div>
              <p className="text-center">Or continue with</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#1D9BF0] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">
                Twitter
              </button>
              <button className="bg-[#24292F] w-1/2 py-1 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">
                Github
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-10">
            Not a member?{" "}
            <a href="/register" className="text-[#4F46E5] font-bold">
              Register Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
