import {  jwtVerify } from "jose"
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret-change-in-production")
import Cookies from "js-cookie"
export const  verifyJwtToken = async (token:any) =>{
    const { payload } = await jwtVerify(token, secret)
    return payload 

} 

export async function destroySession() {
  const cookieStore = Cookies
  cookieStore.remove("token")
  location.reload()
}
 