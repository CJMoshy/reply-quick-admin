import { getUser } from "@/utils/actions/actions";
export default async function Home() {
  const user = await getUser();
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Welcome, {user?.email || "Admin"}
      </h2>
    </div>
  );
}
