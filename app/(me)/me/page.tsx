// app/dashboard/page.tsx
import { cookies } from "next/headers";
import ClientComponent from "./ClientComponent";

export default async function DashboardPage() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value
  return <ClientComponent token={token} />;
}
