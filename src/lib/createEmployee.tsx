"use server";
import Employee from "@/model/Employee";

export default async function createEmployee(newEmployee: Employee) {
  const createdEmployee = await Employee.create(newEmployee);

  return JSON.stringify(createdEmployee);
}
