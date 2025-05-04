import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import AppContext from "../context/AppContext";
import CustomerCard from "../components/CustomerCard";
import AddCustomerForm from "../components/AddCustomerForm";

const Dashboard = () => {
  const { users, showDrawer, setShowDrawer } = useContext(AppContext);
  const [searchName, setSearchName] = useState("");

  return (
    <div className="relative mt-12">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl md:text-3xl">Welcome to dashboard</p>
        <div className="bg-purple-500 rounded-full w-30 h-0.5"></div>
      </div>
      {/* --------Action Buttons--------- */}
      {/* --------➕ Add New Customer Form--------- */}
      <div className="mt-7 overflow-x-auto md:overflow-visible">
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-9 min-w-[600px] sm:min-w-0">
          {/* --------add-customer-section--------- */}
          <div className="min-w-[250px] rounded-3xl bg-gradient-to-tl from-blue-300 to-indigo-600 py-5 px-6 h-40">
            <div className="relative flex flex-col items-center space-y-3">
              <p className="text-white text-2xl flex items-center">
                Add Customer
              </p>
              <button
                onClick={() => setShowDrawer(true)}
                className="absolute top-12 left-20 cursor-pointer"
              >
                <assets.add_cricle_icon className="h-[60px] w-[60px] text-white" />
              </button>
            </div>
          </div>

          {/* --------Add Loan--------- */}
          <div className="min-w-[250px] rounded-3xl bg-gradient-to-tl from-orange-300 to-orange-700 py-5 px-6 h-40">
            <div className="relative flex flex-col items-center space-y-3">
              <p className="text-white text-2xl flex items-center">Add Loan</p>
              <button className="absolute top-12 left-20 cursor-pointer">
                <assets.add_cricle_icon className="h-[60px] w-[60px] text-white" />
              </button>
            </div>
          </div>

          {/* --------Repayment Form--------- */}
          <div className="min-w-[250px] rounded-3xl bg-gradient-to-tl from-emerald-400 to-teal-700 py-5 px-6 h-40">
            <div className="relative flex flex-col items-center space-y-3">
              <p className="text-white text-2xl flex items-center">
                Repayment Form
              </p>
              <button className="absolute top-12 left-20 cursor-pointer">
                <assets.add_cricle_icon className="h-[60px] w-[60px] text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------Users info------- */}
      <hr className="h-[6px] mt-4 text-gray-500/30 " />
      <div className="mt-10 flex flex-col items-end w-max">
        <p className="text-2xl">Your Customers</p>
        <div className="bg-orange-600 rounded-full w-30 h-0.5"></div>
      </div>

      <div className="mt-10">
        <input
          className="h-10 w-[300px] border-[2px] border-gray-400/50 px-1.5  rounded-[5px] hover:border-blue-500 outline-none"
          type="text"
          placeholder="Enter name"
          onChange={(event) => setSearchName(event.target.value)}
        />
      </div>
      {/* -------Customers ------- */}
      <div className="mt-10 h-[500px] overflow-y-auto py-4 px-4 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start   border border-gray-200 rounded-3xl">
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(searchName.toLowerCase())
          )
          .map((user) => (
            <CustomerCard key={user.id} user={user} />
          ))}
      </div>

      {showDrawer && (
        <div
          onClick={() => setShowDrawer(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[0.5px] flex items-end justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white p-6 rounded-t-4xl shadow-lg "
          >
            <div className="flex flex-row justify-between items-center px-6 py-2">
              <h3 className="text-2xl font-medium mb-4">Add New Costumer</h3>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-md cursor-pointer"
              >
                <assets.close_circle_icon className="font-bold text-2xl" />
              </button>
            </div>

            <div>
              <AddCustomerForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
