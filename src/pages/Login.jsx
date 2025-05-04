import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const { navigate, signUpUser, setSignUpUser, form_mode, handleAuth } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    const result = handleAuth(userData, signUpUser);

    if (signUpUser === form_mode.REGISTER && result.success) {
      setName("");
      setEmail("");
      setPassword("");
      toast.success(result.message);
    } else if (!result.success) {
      toast.error(result.message);
    }

    if (signUpUser === form_mode.LOGIN && result.success) {
      navigate("/dashboard");
      toast.success(result.message);
    }
  };

  return (
    <div className="flex items-center min-h-screen">
      <form
        onSubmit={onSubmitHandle}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto">
          <span className="text-indigo-500">User</span>{" "}
          {signUpUser === form_mode.LOGIN ? "Login" : "Sign Up"}
        </p>
        {signUpUser === form_mode.REGISTER && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="password"
            required
          />
        </div>
        {signUpUser === form_mode.REGISTER ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setSignUpUser(form_mode.LOGIN)}
              className="text-indigo-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setSignUpUser(form_mode.REGISTER)}
              className="text-indigo-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
        <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {signUpUser === form_mode.REGISTER ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
