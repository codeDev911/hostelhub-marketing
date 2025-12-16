"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link" 
import Cookies from "js-cookie"
import { Button } from "@/components/ui/button"
import { Mail, Lock, AlertCircle } from "lucide-react"
import { fetchApi } from "@/lib/api"
import { toast } from "sonner"
import { preconnect } from "react-dom"
import Script from "next/script"

export default function StudentLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    preconnect('https://challenges.cloudflare.com');
    try {
      setLoading(true)
      const res = await fetchApi({
      url:"/api/students/login",
      method:"POST",
      body:JSON.stringify({email,password})
      })



      if(res.ok)
      {
        let data=await res.json()
        Cookies.set("token",data.token)
        toast.success("Logged in success!")
        location.assign("/me")
      }else if(res.status == 401){
         toast.error("Invalid credentials")
      }
    } catch (error) {
        toast.error("An error occured.")

        setError("Error occured")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
<Script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  async
  defer
></Script>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Student Login</h1>
            <p className="text-foreground/60 mb-8">Sign in to your account to manage your hostel booking</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 w-5 h-5 text-foreground/40" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>
          <div className="cf-turnstile" data-sitekey="0x4AAAAAACHAfcfd1SkCbnim"></div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-2.5 rounded-lg transition-colors"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-foreground/60 text-sm">
                Don't have an account?{" "}
                <Link href="/student/register" className="text-accent font-semibold hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
 
        </div>
      </main>

    </div>
  )
}
