import { getUsers, addUser } from "../utils/userApi";

export const fetchedUsers = async () => {
  try {
    const response = await getUsers();
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const addNewCustomer = async (newUser) => {
  try {
    await addUser(newUser);
    return { success: true, message: "Customer Added Successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
