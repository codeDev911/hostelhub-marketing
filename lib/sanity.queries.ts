export const POST_BY_SLUG_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  excerpt,
  publishedAt,
  "author": author->{
    name
  },
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  body
}
`
export const ALL_POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  excerpt,
  publishedAt,
  "author": author->{
    name
  },
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}
`
