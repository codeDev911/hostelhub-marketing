import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"
import type { JWTPayload } from "jose"

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret-change-in-production")


export interface SessionData extends JWTPayload {
  adminId: string
  email: string
  hostelOwnerId: string
  hostelId: string | null
}
 
export async function getSession(): Promise<SessionData | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value
    if (!token) return null

    const { payload } = await jwtVerify(token, secret)
    return payload as SessionData
  } catch {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete("token")
}
 