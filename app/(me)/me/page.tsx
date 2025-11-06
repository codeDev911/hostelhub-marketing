// app/dashboard/page.tsx
import { cookies } from "next/headers";
import ClientComponent from "./ClientComponent";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value
     
    if(!token){
      redirect("/student/login")
    }

    if(token){
      let session = await getSession()
      if(!session?.email){
        redirect("/student/login")
      }
    }
    return <ClientComponent token={token} />;
}
