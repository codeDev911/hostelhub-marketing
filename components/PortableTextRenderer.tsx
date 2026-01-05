"use client"

import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={value.asset.url}
          alt={value.alt || "Blog image"}
          width={1200}
          height={600}
          className="rounded-2xl w-full object-cover"
        />
      </div>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-muted-foreground leading-relaxed mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent pl-6 italic my-6 text-lg">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-muted-foreground">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-muted-foreground">{children}</li>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value?.href?.startsWith("/") ? "noopener noreferrer" : undefined

      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-accent underline underline-offset-4 hover:opacity-80"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }: any) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
  },
}

export default function PortableTextRenderer({ value }: { value: any }) {
  return (
    <PortableText
      value={value}
      components={components}
    />
  )
}
