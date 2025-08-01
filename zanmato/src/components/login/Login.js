import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [view, setView] = useState("login"); // default view is login
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = (type) => {
    setView(type);
  };
  const [Form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const LoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        Form
      );

      setmessage(response.data.message || "form is logged is successfully");

      localStorage.setItem("token", response.data.token);
      console.log("✅ Token received:", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/admin");
    } catch (error) {
      setmessage(error.response?.data?.error || "server error");
    }
  };

  const registerForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        Form
      );

      setmessage(response.data.message || "form is submitted is successfully");
    } catch (error) {
      setmessage(error.response?.data?.error || "server error");
    }
  };
  return (
    <>
      {/* LOGIN FORM */}
      {view === "login" && (
        <div className="login c grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="section1 flex flex-col w-[90%] md:w-[400px] py-6 my-7 bg-white justify-center gap-10 mx-auto rounded-lg px-6">
            <h1 className="text-[32px] font-medium text-center">
              Welcome Back
            </h1>
            <form action="" onSubmit={LoginForm}>
              <div className="form flex flex-col gap-5 text-[14px] font-medium">
                <div className="inputs flex flex-col">
                  <label htmlFor="email">Email address</label>
                  <input
                    value={Form.email}
                    name="email"
                    onChange={handleForm}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-[#D9D9D9] border-2 p-2 text-[12px] rounded-xl"
                  />
                </div>

                <div className="inputs flex flex-col">
                  <div className="lab flex flex-row  justify-between">
                    <label htmlFor="password">Password</label>{" "}
                    <label htmlFor="">
                      <a
                        href=""
                        className="text-[#0F3DDE] text-[12px] transition-all  hover:underline"
                      >
                        Forget password
                      </a>
                    </label>
                  </div>
                  <input
                    value={Form.password}
                    name="password"
                    onChange={handleForm}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="border-[#D9D9D9] border-2 p-2 text-[12px] rounded-xl"
                  />
                </div>

                <div className="inputs flex items-center gap-2 text-[12px]">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember for 30 days</label>
                </div>

                <button className="bg-[#3A5B22] rounded-xl text-white font-bold text-[14px] p-2">
                  Login
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-2 my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="text-sm text-gray-500">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="btn flex gap-3 w-full">
                <button className="flex items-center justify-center gap-2 w-1/2 font-semibold text-[14px] border-[#D9D9D9] border-2 p-3 rounded-xl">
                  <FcGoogle className="w-[20px] h-[20px]" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 w-1/2 font-semibold text-[14px] border-[#D9D9D9] border-2 p-3 rounded-xl">
                  <GrApple className="w-[20px] h-[20px]" />
                  Apple
                </button>
              </div>

              <div className="link flex flex-row gap-1 text-[14px]">
                Don’t have an account?
                <button
                  type="button"
                  onClick={() => handleLogin("register")}
                  className="text-[#1976D2] font-semibold"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <div className="section2 hidden md:block">
            <img
              src={require("../../assets/assets/login/image.png")}
              alt="Login Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* REGISTER FORM */}
      {view === "register" && (
        <div className="login  grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div className="section1 flex flex-col w-[90%] md:w-[400px] py-6 my-7 bg-white justify-center gap-10 mx-auto rounded-lg px-6">
            <h1 className="text-[32px] font-medium text-center">
              Get Started Now
            </h1>
            <form action="" onSubmit={registerForm}>
              <div className="form flex flex-col gap-5 text-[14px] font-medium">
                <div className="inputs flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input
                    value={Form.name}
                    name="name"
                    onChange={handleForm}
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="border-[#D9D9D9] border-2 p-2 text-[12px] rounded-xl"
                  />
                </div>

                <div className="inputs flex flex-col">
                  <label htmlFor="email">Email address</label>
                  <input
                    value={Form.email}
                    name="email"
                    onChange={handleForm}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-[#D9D9D9] border-2 p-2 text-[12px] rounded-xl"
                  />
                </div>

                <div className="inputs flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    value={Form.password}
                    name="password"
                    onChange={handleForm}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="border-[#D9D9D9] border-2 p-2 text-[12px] rounded-xl"
                  />
                </div>

                <div className="inputs flex items-center gap-2 text-[12px]">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <a href="#" className="underline">
                      terms & policy
                    </a>
                  </label>
                </div>

                <button className="bg-[#3A5B22] rounded-xl text-white font-bold text-[14px] p-2">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-2 my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="text-sm text-gray-500">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="btn flex gap-3 w-full">
                <button className="flex items-center justify-center gap-2 w-1/2 font-semibold text-[14px] border-[#D9D9D9] border-2 p-3 rounded-xl">
                  <FcGoogle className="w-[20px] h-[20px]" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 w-1/2 font-semibold text-[14px] border-[#D9D9D9] border-2 p-3 rounded-xl">
                  <GrApple className="w-[20px] h-[20px]" />
                  Apple
                </button>
              </div>

              <div className="link flex flex-row gap-1 text-[14px]">
                Already have an account?
                <button
                  type="button"
                  onClick={() => handleLogin("login")}
                  className="text-[#1976D2] font-semibold"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <div className="section2 hidden md:block">
            <img
              src={require("../../assets/assets/login/image.png")}
              alt="Login Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
