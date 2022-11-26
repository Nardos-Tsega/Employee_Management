import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "http://localhost:4000/",
  headers: { "Content-Type": "application/json" },
});

export const getAllEmployees = async () => {
  try {
    const employees = await axios.get("employees");
    return employees.data;
  } catch (err) {
    return console.log(err);
  }
};

export const createNewEmployee = async ({
  name,
  gender,
  birthdate,
  salary,
}) => {
  try {
    const employee = await axios.post("employees", {
      name,
      gender,
      birthdate,
      salary,
    });
    return employee.data;
  } catch (err) {
    return console.error(err);
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`employees/${id}`);
    return id;
  } catch (err) {
    return console.error(err);
  }
};

export const updateEmployee = async (id) => {
  try {
    await axios.patch(`employees/${id}`);
    return id;
  } catch (err) {
    return console.error(err);
  }
};
