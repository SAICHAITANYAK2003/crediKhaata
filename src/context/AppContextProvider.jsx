import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";
import { fetchedUsers } from "../utils/userServices";
import toast from "react-hot-toast";

const AppContextProvider = ({ children }) => {
  const form_mode = {
    LOGIN: "login",
    REGISTER: "register",
  };

  const navigate = useNavigate();
  const [loginUser, setloginUser] = useState(null);
  const [signUpUser, setSignUpUser] = useState(form_mode.REGISTER);
  const [users, setUsers] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const currency = import.meta.env.CURRENCY;

  useEffect(() => {
    const storedUser = localStorage.getItem("loginUser");
    if (storedUser) {
      setloginUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    fetchedUsers().then((response) => {
      if (response.success) {
        setUsers(response.data);
      } else {
        toast.error(response.message);
      }
    });
  }, []);

  const handleAuth = (userData, mode) => {
    if (mode === form_mode.REGISTER) {
      const storedData = localStorage.getItem("signUpUser");
      if (storedData) {
        return { success: false, message: "User already Registered" };
      } else {
        localStorage.setItem("signUpUser", JSON.stringify(userData));
        setSignUpUser(form_mode.LOGIN);
        return { success: true, message: "Registered Successfully" };
      }
    } else {
      const storedData = localStorage.getItem("signUpUser");
      if (!storedData) {
        return { success: false, message: "User Not registered yet" };
      }
      const parsedData = JSON.parse(storedData);
      if (
        parsedData.email === userData.email &&
        parsedData.password === userData.password
      ) {
        localStorage.setItem("loginUser", JSON.stringify(parsedData));
        setloginUser(parsedData);

        return { success: true, message: "User Login success" };
      } else {
        return { success: false, message: "Invalid Credentials" };
      }
    }
  };

  const value = {
    loginUser,
    setloginUser,
    navigate,
    signUpUser,
    setSignUpUser,
    form_mode,
    handleAuth,
    users,
    setUsers,
    currency,
    showDrawer,
    setShowDrawer,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
