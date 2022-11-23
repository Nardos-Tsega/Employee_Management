import React from "react";

const Form = () => {
  return (
    <div className="shadow-lg">
      <h1 className="bg-[#FA8C3C] text-white py-6 px-4 text-center text-lg font-medium rounded-md">
        Add New
      </h1>
      <form className="w-full px-6 py-6 mx-auto flex flex-col gap-5">
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
          />
        </label>
        <label htmlFor="name">
          Birth Date
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
          />
        </label>
        <label htmlFor="name">
          Gender
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
          />
        </label>
        <label htmlFor="name">
          Salary
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
          />
        </label>
        <input
          type="submit"
          value="Register"
          className="bg-[#FA8C3C] h-10 text-white rounded-full w-full"
        />
      </form>
    </div>
  );
};

export default Form;
