import { HTTP_METHOD } from "next/dist/server/web/http"

interface fetchApiTypes {
 url:string
 method:HTTP_METHOD
headers?: any | null
body?: any | null
    revalidate?:number
}

export async function fetchApi({url,method,headers=null,body=null,revalidate=10}:fetchApiTypes) {
        
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`,{
        method,
        headers:{
            ...headers,
            "x-api-token":process.env.API_SECRET_TOKEN,
            "Content-Type":"application/json",
            "origin":"http://localhost:3001",
        },
        body,
        next: {revalidate: revalidate},
    })
}