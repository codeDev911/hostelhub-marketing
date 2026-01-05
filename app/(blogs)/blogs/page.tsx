// app/blogs/page.tsx
import Link from "next/link"
import Image from "next/image"
import { sanityClient } from "@/lib/sanity.client"
import { CalendarDays, User } from "lucide-react"

const POSTS_QUERY = `
*[_type=="post"] | order(publishedAt desc){
  title,
  slug,
  excerpt,
  publishedAt,
  "author": author->name,
  "image": mainImage.asset->url,
  "categories": categories[]->title
}
`

async function getPosts() {
  return sanityClient.fetch(POSTS_QUERY)
}

export const metadata = {
  title: "Hostelhub blogs - Student life, growth, scholarships & more",
  description:
    "Explore student life, hostels, growth, scholarships and success stories on HostelHub Blogs.",
}

export default async function BlogsPage() {
  const posts = await getPosts()

  const recentPosts = posts.slice(0, 6)

  const categoriesMap: Record<string, any[]> = {}
  posts.forEach((p: any) => {
    p.categories?.forEach((c: string) => {
      if (!categoriesMap[c]) categoriesMap[c] = []
      categoriesMap[c].push(p)
    })
  })

  return (
    <main className="bg-background">

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Knowledge that <span className="undercurve">shapes</span> your student life
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Hostel living, growth mindset, scholarships, career paths and real student stories.
            </p>
            <Link
              href="#recent"
              className="inline-flex bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold"
            >
              Explore Blogs
            </Link>
          </div>
          <div className="relative h-[320px] rounded-2xl overflow-hidden bg-card">
            <Image
              src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section id="recent" className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>

          <div className="grid md:grid-cols-3 gap-5  overflow-x-auto pb-4">
            {recentPosts.map((post: any) => (
              <Link
                key={post.slug.current}
                href={`/blogs/${post.slug.current}`}
                className="group"
              >
                <article className="bg-card rounded-2xl overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold group-hover:underline mb-1 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm mb-2 h-10 overflow-hidden text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between mt-2  gap-3 text-xs text-muted-foreground">
                      <span className="flex gap-1 items-center">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                      <span className="flex gap-1 items-center">
                        <CalendarDays className="w-3 h-3" />
                        {new Date(post.publishedAt).toDateString()}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY BASED */}
      {Object.entries(categoriesMap).map(([category, items]) => (
        <section key={category} className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{category}</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 overflow-x-auto pb-4">
              {items.slice(0, 6).map((post: any) => (
                <Link
                  key={post.slug.current}
                  href={`/blogs/${post.slug.current}`}
                  className="min-w-[280px] group"
                >
                  <article className="bg-card rounded-2xl overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:underline text-sm line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm mb-2 h-10 overflow-hidden text-muted-foreground">
                      {post.excerpt}
                    </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

    </main>
  )
}
