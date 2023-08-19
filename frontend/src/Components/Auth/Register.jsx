import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    name: "",
    termsAccepted: false,
    college: "",
    batch: "",
    department: "",
    phone: "",
    image: null,
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
      setTermsAccepted(checked);
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData,
        {
          withCredentials: true,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      if (data.success) {
        // Registration successful
        alert("Registration Done!");
      } else {
        // Registration failed
        alert("Registration failed: " + data.error);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
      <img className="w-32 mx-auto my-16" src="/Doraemon.png" alt="logo" />

      <div className="w-full bg-white rounded-xl shadow-2xl  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+12 4578986532"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                value={formData.cpassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <p>
                  By clicking Create an Account, you agree to our{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>{" "}
                  ,{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Cookies Policy
                  </a>
                </p>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full font-medium rounded-[16px] text-sm px-5 py-2.5 text-center ${
                termsAccepted
                  ? "bg-blue-500 text-white"
                  : "bg-blue-300 text-black pointer-events-none"
              } `}
              disabled={!termsAccepted}
            >
              Create an account
            </button>
            <p className="text-sm text-gray-500 mt-10 flex space-x-6 justify-center">
              <span>Already have an account</span>
              <a href="/login" className="text-[#4F46E5] font-bold">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
