import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { addNewCustomer } from "../utils/userServices";
import { toast } from "react-hot-toast";

const InputField = ({ type, placeholder, handleChange, name, value }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    className="h-10 w-full  border-gray-300 px-3 outline-none rounded-md border-[2px] hover:border-indigo-600"
    name={name}
    value={value}
    required
  />
);

const AddCustomerForm = () => {
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    phoneNumber: "",
    loan: "",
  });

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setNewCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const todayDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(todayDate.getDate() + 30);

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    const customerWithId = {
      ...newCustomer,
      id: uuidV4(),
      name: newCustomer.name,
      outstandingBalance: parseFloat(newCustomer.loan),
      dueDate: Math.floor(futureDate.getTime() / 1000),
      status: "Overdue",
    };

    const result = await addNewCustomer(customerWithId);

    if (result.success) {
      toast.success(result.message);
      setNewCustomer({ name: "", phoneNumber: "", loan: "" });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="mt-10 px-16">
      <form onSubmit={onSubmitHandle} className="max-w-md">
        {/* -----username-------- */}
        <div className="flex flex-col items-start mb-7">
          <label className="mb-2">Enter Customer Name</label>
          <InputField
            type="text"
            placeholder="Enter Customer Name"
            handleChange={onHandleChange}
            name="name"
            value={newCustomer.name}
          />
        </div>

        {/* -----phone no-------- */}
        <div className="flex flex-col items-start mb-5">
          <label className="mb-2">Enter Phone No:</label>
          <InputField
            type="text"
            placeholder="ex: 1234567890"
            handleChange={onHandleChange}
            name="phoneNumber"
            value={newCustomer.phoneNumber}
          />
        </div>

        {/* ----Loan-------- */}
        <div className="flex flex-col items-start mb-5">
          <label className="mb-2">Enter Loan:</label>
          <InputField
            type="text"
            placeholder="ex : 50000"
            handleChange={onHandleChange}
            name="loan"
            value={newCustomer.loan}
          />
        </div>

        <button
          className="px-5 h-10 w-max  bg-indigo-600 rounded-md text-white cursor-pointer"
          type="submit"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
