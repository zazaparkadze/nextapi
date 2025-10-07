import Employee from "@/model/Employee";
import { NextResponse } from "next/server";
import connectToMongo from "../../../lib/connectToMongo";

export async function GET() {
  connectToMongo();
  const employees = await Employee.find();
  return NextResponse.json(employees);
}
