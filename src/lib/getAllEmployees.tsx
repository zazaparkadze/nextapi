"use server";
import Employee from "../model/Employee";

export default async function getAllEmployees() {
  const allEmployees: Employee[] = await Employee.find({});

  return JSON.stringify(allEmployees);
}
