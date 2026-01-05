import Image from "next/image"
import { notFound } from "next/navigation"
import {  CalendarDays, User } from "lucide-react"
import { sanityClient } from "@/lib/sanity.client"
import { POST_BY_SLUG_QUERY } from "@/lib/sanity.queries"
import PortableTextRenderer from "@/components/PortableTextRenderer"
import Link from "next/link"



async function getPost(slug: string) {
  return sanityClient.fetch(POST_BY_SLUG_QUERY, { slug })
}


export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const slug = (await params).slug;
  const post = await getPost(slug)

  if (!post) return {}
 return {
  title: `${post.title}`,
  description: post.excerpt,

  alternates: {
    canonical: `https://www.hostelhub.pk/blogs/${post.slug}`,
  },

  keywords: post.excerpt.split(" ").slice(0, 20),

  openGraph: {
    title: `${post.title}`,
    description: post.excerpt,
    url: `https://www.hostelhub.pk/blogs/${post.slug}`,
    siteName: "HostelHub",
    images: [
      {
        url: post.mainImage || "https://www.hostelhub.pk/og-default.jpg",
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
    locale: "en_PK",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: `${post.title} `,
    description: post.excerpt,
    images: [post.mainImage || "https://www.hostelhub.pk/og-default.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  authors: [{ name: post.author || "HostelHub Team" }],
  category: "Startups",

  metadataBase: new URL("https://www.hostelhub.pk"),
}

}

export default async function BlogDetailsPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = (await params).slug;
  const post = await getPost(slug)

  if (!post) return notFound()

  return (
    <main className="bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[45vh]">
        <Image
          src={post.mainImage}
          alt={post.title}
          fill
          className="object-cover   "
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>
      <section className="md:grid gap-4 grid-cols-4">
        <div className="md:col-span-3 flex-col md:border-r border-border ">
          <div className="relative">
            <div className="absolute -top-5 w-screen md:border-t border-border"></div>
            <div className="relative  z-10 max-w-5xl md:mx-12 px-4 h-full flex items-end  md:mt-16 mt-12 text-primary">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories?.map((cat: string) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold">
                  {post.title}
                </h1>

                <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author?.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(post.publishedAt).toDateString()}
                  </span>
                </div>

              </div>
            </div>
            {/* CONTENT */}
            <section className="max-w-5xl md:mx-12 px-4 py-8">
              <p id="description" className="text-lg  border-l-4 pl-2 border-accent text-muted-foreground mb-3">{post.excerpt}</p>
              <article className="prose prose-lg max-w-none text-foreground">
                <PortableTextRenderer value={post.body} />
                <div className="flex w-full justify-center items-center">
                  <span className="text-sm text-muted-foreground">--- Post ended ---</span>
                </div>
              </article>
            </section>

            {/* CTA */}
            <section className="max-w-5xl md:mx-12 px-4 pb-20">
              <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Learn Beyond Success with HostelHub
                </h2>
                <p className="text-muted-foreground mb-6">
                  HostelHub is building Pakistan’s most student-friendly ecosystem for
                  hostels, community, growth, and opportunities.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-3 font-semibold hover:bg-accent/90 transition"
                >
                  Explore hostelhub
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="md:my-16  md:w-[95%] max-md:p-4">
          <p className="text-muted-foreground text-xs p-2 mb-3">Note : This section is not related to blog post</p>
          <div className="p-4 rounded-2xl bg-card">
            <span className="text-xs font-medium  bg-accent text-accent-foreground px-3 py-1 rounded-full">
              New feature
            </span>
            <h4 className="text-lg text-primary font-bold mt-1">Find roommate</h4>
            <p className="text-muted-foreground text-sm">Explore one of the most trusted Hostelhub feature. To let you find roommate what you want</p>
            <Link href="/find-roommate" className=" text-center justify-center mt-2 w-full flex rounded-full p-2 px-6 hover:bg-secondary/80 font-semibold  border border-border">Find now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
