import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AppContext from "./context/AppContext";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

const App = () => {
  const { loginUser } = useContext(AppContext);

  return (
    <>
      {loginUser ? <Navbar /> : null}
      <Toaster />
      <div className="px-6 md:px-16 lg:px-24">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={loginUser ? <Dashboard /> : <Login />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
