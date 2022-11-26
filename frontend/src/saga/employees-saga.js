import { put, call, takeLatest, takeEvery, take } from "redux-saga/effects";

import {
  getAllEmployees,
  createNewEmployee,
  deleteEmployee,
  updateEmployee,
} from "../api/employee-api";

function* createEmployee({ payload }) {
  const newEmployee = yield call(createNewEmployee, payload);
  yield put({ type: "employees/employeeAdded", payload: newEmployee });
}

function* deleteEmploy({ payload }) {
  const employee = yield call(updateEmployee, payload);
  yield put({ type: "employees/employeeEdited", payload: employee });
}

function* updateEmploy({ payload }) {
  const employee = yield call(deleteEmployee, payload);
  yield put({ type: "employees/employeeDeleted", payload: employee });
}

export default function* employeeSaga() {
  yield takeEvery("employees/employeeDeleted", deleteEmploy);
  yield takeEvery("employees/getEmployees", getAllEmployees);
  yield takeEvery("employees/employeeEdited", updateEmploy);
  yield takeLatest("employees/employeeAdded", createEmployee);
}
