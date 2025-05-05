import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { deleteCustomer } from "../utils/userServices";
import toast from "react-hot-toast";
import AppContext from "../context/AppContext";

const CustomerDetails = ({ selectedUser }) => {
  const { setUserDetailsDrawer } = useContext(AppContext);
  if (!selectedUser) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const onHandleDelete = async () => {
    const result = await deleteCustomer(selectedUser.id);
    if (result.success) {
      toast.success(result.message);
      setUserDetailsDrawer(false);
    } else {
      toast.error(result.message);
    }
  };

  const customerMailName = selectedUser.name;
  const formattedName = customerMailName.toLowerCase().replace(/\s+/g, "");
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-10  md:gap-y-0 gap-x-30  min-h-[300px]">
        {/* ------card------- */}
        <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-300">
          <div className="w-64 flex justify-center pt-10">
            <div className="w-10 h-10 rounded-full overflow-hidden ">
              <img
                className="h-10 object-cover object-top"
                src={assets.profile_icon}
                alt="userImage2"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium mt-3">{selectedUser.name}</p>
            <p className="text-gray-500 text-sm">{formattedName}@gmail.com</p>
          </div>
        </div>

        {/* ------UserDtails------- */}
        <div className="rounded-2xl flex flex-col items-start justify-between space-y-3">
          {/* -----username----- */}
          <h3 className="flex flex-row items-center    gap-4 ">
            <span className="bg-blue-500 text-white text-[12px] px-2 py-0.5 rounded-[5px] md:mb-3">
              Username :
            </span>
            <span className="text-[20px]">{selectedUser.name}</span>
          </h3>
          {/* -----outstanding amount----- */}
          <p className="flex flex-row  items-center  gap-4">
            <span className="bg-green-600 text-white text-[12px] px-2 py-0.5 rounded-[5px] md:mb-3">
              OutStanding Balance :
            </span>
            <span className="text-[20px]">
              {selectedUser.outstandingBalance}
            </span>
          </p>

          {/* -----date strinfg----- */}
          <p className="flex flex-row  items-center  gap-4">
            <span className="bg-sky-600 text-white text-[12px] px-2 py-0.5 rounded-[5px] md:mb-3">
              Due Date :
            </span>
            <span className="text-[20px]">
              {formatDate(selectedUser.dueDate)}
            </span>
          </p>

          <p className="flex flex-row items-center md:items-start gap-4">
            <span className="bg-purple-500 text-white text-[12px] px-2 py-0.5 rounded-[5px] md:mb-3">
              Status :
            </span>
            <span className="text-[20px]">{selectedUser.status}</span>
          </p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <button className="h-12 w-20 bg-blue-600 py-3 px- 4 text-white rounded-md cursor-pointer">
            Add
          </button>
          <button
            onClick={onHandleDelete}
            className="h-12 w-20 bg-red-600 py-3 px- 4 text-white rounded-md cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
