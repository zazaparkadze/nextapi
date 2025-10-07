import Employee from "../../../../model/Employee";
import { NextResponse } from "next/server";

export async function GET() {
  const employees = await Employee.find();
  return NextResponse.json(employees);
}
