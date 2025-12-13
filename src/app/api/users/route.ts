import { NextResponse } from "next/server";
import { users } from "@/lib/data/users";

export async function GET() {
  // Simulate small delay (optional but realistic)
  await new Promise((res) => setTimeout(res, 400));

  return NextResponse.json({
    success: true,
    data: users,
  });
}
