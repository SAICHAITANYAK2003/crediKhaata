import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://6816f63926a599ae7c38f88b.mockapi.io",
});

export const getUsers = () => apiUrl.get("/users");

export const addUser = (newUser) => apiUrl.post("/users", newUser);
