import React from "react";
import { assets } from "../assets/assets";

const CustomerCard = ({ user }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const userDueDate = formatDate(user.dueDate);
  return (
    <div className="flex flex-row  items-center  gap-10 ">
      <div className="bg-indigo-500/5 border border-gray-500/20 text-sm text-gray-500 flex flex-col items-center w-80 rounded-lg">
        <div className="flex items-center justify-between w-full px-4 py-2">
          <div className="flex items-center justify-between gap-3">
            <div className="bg-white p-1.5 rounded border border-gray-500/30">
              <img
                className="h-9"
                src={assets.profile_icon}
                alt="customer icon "
              />
            </div>
            <p className="text-lg text-gray-800">{user.name}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-gray-500/20">
          <div className="flex items-center w-full justify-between">
            <p>Due-Date</p>
            <p> {userDueDate}</p>
          </div>

          <div className="w-full h-px bg-gray-300/60"></div>
          <div className="flex items-center w-full justify-between">
            <p>Amount</p>
            <div className="flex items-center gap-2">
              <p>₹ {user.outstandingBalance}</p>
              <p
                className={` px-3 py-0.5 rounded border  ${
                  user.status === "Up-to-date"
                    ? "text-green-600  bg-green-500/20 border-green-500/30"
                    : "text-red-600 bg-red-500/20 border-red-500/30"
                }`}
              >
                {user.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
