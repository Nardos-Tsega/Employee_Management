import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const Form = () => {

  const dispatch = useDispatch();

  const [nameField, setNameField] = useState("");
  const [gender, setGenderField] = useState("");
  const [birthdateField, setBirthDateField] = useState("");
  const [salaryField, setSalaryField] = useState("");

  const handleNameChange = (e) => setNameField(e.target.value);
  const handleGenderChange = (e) => setGenderField(e.target.value);
  const handleBirthDateChange = (e) => setBirthDateField(e.target.value);
  const handleSalaryFieldChange = (e) => setSalaryField(e.target.value);

  const handleSubmit = () => {
    dispatch({type: "employees/employeeAdded", payload: {
      name : nameField,
      gender : gender,
      salary : salaryField,
      birthdate : birthdateField
    }})
  }

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
            value={nameField}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="name">
          Birth Date
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
            value={birthdateField}
            onChange={handleBirthDateChange}
          />
        </label>
        <label htmlFor="name">
          Gender
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
            value={gender}
            onChange={handleGenderChange}
          />
        </label>
        <label htmlFor="name">
          Salary
          <input
            type="text"
            id="name"
            className="border block border-[#606060] h-8 rounded w-full"
            value={salaryField}
            onChange={handleSalaryFieldChange}
          />
        </label>
        <input
          type="submit"
          value="Register"
          className="bg-[#FA8C3C] h-10 text-white rounded-full w-full"
          onClick={}
        />
      </form>
    </div>
  );
};

export default Form;
