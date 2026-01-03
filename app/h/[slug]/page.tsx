export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug  = (await params).slug;
  
  // 1. Fetch data directly on the server
  const url = `https://raw.githubusercontent.com/hostel-hub/htm-pages/main/${slug}.html`;
  const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
  const htmlContent = await res.text();

  return (
    <main>
      {/* 2. Inject the HTML */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}