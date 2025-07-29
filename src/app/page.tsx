import Link from "next/link";
import { signOut, getUser } from "@/utils/actions/actions";
export default async function Home() {
  const user = await getUser();
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Welcome, {user?.email || "Admin"}
      </h2>
      <div className="mt-4 self-start">
        <h3 className="border-b">Actions</h3>
        <Link href={"/number"} className="text-blue-500 hover:underline">
          Phone Numbers
        </Link>
      </div>
      <button onClick={signOut} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Sign Out
      </button>
    </div>
  );
}
