const intialState = [];

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case "employees/employeeAdded": {
      return [
        ...state,
        {
          name: action.payload.name,
          age: action.payload.age,
          salary: action.payload.salary,
          birthdate: action.payload.birthdate,
        },
      ];
    }
    case "employees/employeeEdited": {
      return state.map((employee) => {
        if (employee.id !== action.payload) {
          return employee;
        }
        return {
          ...employee,
          name: action.payload.name,
          age: action.payload.age,
          salary: action.payload.salary,
          birthdate: action.payload.birthdate,
        };
      });
    }
    case "employees/employeeDeleted": {
      return state.map((employee) => {
        if (employee.id !== action.payload) {
          return employee;
        }
      });
    }
    default:
      return state;
  }
}
