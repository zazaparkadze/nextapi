import getAllEmployees from "@/lib/getAllEmployees";
import EmployeePage from "./components/EmployeePage";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default function page() {
  const data: Promise<Employee[]> = getAllEmployees();
  if (!data) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmployeePage data={data} />
    </Suspense>
  );
}
