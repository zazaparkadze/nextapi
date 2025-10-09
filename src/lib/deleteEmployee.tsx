"use server";
import Employee from "@/model/Employee";

export default async function deleteEmployee(id: number) {
  const res = await Employee.deleteOne({ id });

  return JSON.stringify(res);
}
