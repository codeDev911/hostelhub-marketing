'use client';

import { useEffect, useState } from 'react';

export default function Page({ params }: { params: any }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function fetchData() {
      const slug = (await params).slug;
      const res = await fetch(
        `https://raw.githubusercontent.com/hostel-hub/htm-pages/main/${slug}.html`
      );
      const text = await res.text();

      setHtmlContent(`
        <script src="https://cdn.tailwindcss.com"></script>
        ${text}
      `);
    }

    fetchData();
  }, [params]);

  return (
    <iframe
      className="w-full h-screen border-none"
      srcDoc={htmlContent}
    />
  );
}