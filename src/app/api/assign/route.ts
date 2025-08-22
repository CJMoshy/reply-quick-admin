// src/app/api/assign/route.ts
export async function GET() {
  try {
    const res = await fetch(`${process.env.PHONE_API_URL}?status=true`);
    if (!res.ok) {
      return Response.json({ error: "Failed to fetch numbers" }, { status: 500 });
    }
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
