import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Reply Quick Admin Dash</h1>
      <Link href={"/number"} className="text-blue-500 hover:underline">
        Manage Phone Numbers
      </Link>
    </div>
  );
}
