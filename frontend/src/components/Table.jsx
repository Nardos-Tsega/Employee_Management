import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useState, useEffect } from "react";

const Table = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/employees/");
      const { results } = await data.json();

      setEmployees(results);
    }

    fetchData();
  }, [employees.length]);

  //     {
  //       id: 1,
  //       name: "Voddie Baucham",
  //       birth_date: "11-03-2021",
  //       gender: "Male",
  //       salary: "2000",
  //     },
  //     {
  //       id: 1,
  //       name: "Voddie Baucham",
  //       birth_date: "11-03-2021",
  //       gender: "Male",
  //       salary: "2000",
  //     },
  //     {
  //       id: 1,
  //       name: "Voddie Baucham",
  //       birth_date: "11-03-2021",
  //       gender: "Male",
  //       salary: "2000",
  //     },
  //     {
  //       id: 1,
  //       name: "Voddie Baucham",
  //       birth_date: "11-03-2021",
  //       gender: "Male",
  //       salary: "2000",
  //     },
  //     {
  //       id: 1,
  //       name: "Voddie Baucham",
  //       birth_date: "11-03-2021",
  //       gender: "Male",
  //       salary: "2000",
  //     },
  //   ];
  return (
    <div className="flex flex-col shadow-lg">
      <h1 className="py-6 text-lg font-medium text-center text-[#FA8937]">
        Your Employees
      </h1>
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#EDF6F5]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs leading-5 text-left text-[#24CEC8]"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs leading-5 text-left text-[#24CEC8]"
                  >
                    Birth Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs leading-5 text-left text-[#24CEC8]"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs leading-5 text-left text-[#24CEC8]"
                  >
                    Salary
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs leading-5 text-left text-[#24CEC8]"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {employees?.map((items) => (
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-xs leading-5 text-left text-black100 whitespace-nowrap">
                      {items?.name}
                    </td>
                    <td className="px-6 py-4 text-xs leading-5 text-left text-black100 whitespace-nowrap">
                      {items?.dateofbirth}
                    </td>
                    <td className="px-6 py-4 text-xs leading-5 text-black100 text-left whitespace-nowrap">
                      {items?.gender}
                    </td>
                    <td className="px-6 py-4 text-xs leading-5 text-black100 text-left whitespace-nowrap">
                      {items?.salary}
                    </td>
                    <td className="flex items-center gap-1 px-6 py-4">
                      <MdModeEditOutline color="#FA8937" size="22px" />
                      <MdDelete color="#FA8937" size="22px" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
