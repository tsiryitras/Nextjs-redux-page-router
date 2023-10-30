import UserTable from "@/components/UserTable";

export default function User() {
  return (
    <div>
      <h2>Liste of User</h2>
      <section className="mt-4">
        <UserTable />
      </section>
    </div>
  );
}
