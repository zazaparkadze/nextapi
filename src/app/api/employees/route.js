import Employee from "@/model/Employee";
import { NextResponse } from "next/server";

export async function GET() {
  const employees = await Employee.find();
  if (!employees.length) {
    return NextResponse.json({ message: "employees array is empty" });
  }
  return NextResponse.json(employees);
}
