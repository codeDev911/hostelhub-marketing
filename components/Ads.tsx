"use client"
import { useEffect } from "react"

export function displayAd() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error("Adsbygoogle error:", e)
    }
  }, [])

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-full-width-responsive="true"
        data-ad-format="auto"
        data-ad-client="ca-pub-3813082110628354"
        data-ad-slot="4817988077"
      ></ins>
    </div>
  )
}

export function InArticleAd() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error("Adsbygoogle error:", e)
    }
  }, [])

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3813082110628354"
        data-ad-slot="2638439499"
      ></ins>
    </div>
  )
}

export function InFeedAd() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error("Adsbygoogle error:", e)
    }
  }, [])

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-feed"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3813082110628354"
        data-ad-slot="6051070890"
      ></ins>
    </div>
  )
}
