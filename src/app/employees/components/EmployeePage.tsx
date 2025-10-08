import type { Metadata } from "next";

type Props = {
  data: Promise<Employee[]>;
};

export const metadata: Metadata = {
  title: "employees",
  description: "employees fetched from mongoDB",
};

export default async function EmployeePage({ data }: Props) {
  const employees = await data;
  return employees.map((employee) => (
    <section
      key={employee.id}
      className="text-3xl text-amber-500 min-w-[75vw] bg-black/10 pt-25 pl-25"
    >
      <p>First Name: {employee.firstname}</p>
      <p>Last Name: {employee.lastname}</p>
      <br />
      <p>
        Email:{" "}
        {`${employee.lastname}_${employee.firstname}_${employee.id}@parkadze.com`}
      </p>
      <br />
      <hr />
    </section>
  ));
}
