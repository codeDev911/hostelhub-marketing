'use client'; 

import { useEffect, useRef, useState } from 'react';

// --- THE ISOLATION COMPONENT ---
function IsolatedHtml({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create shadow root if it doesn't exist
      const shadowRoot = containerRef.current.shadowRoot || containerRef.current.attachShadow({ mode: 'open' });
      
      // Inject the HTML directly into the shadow boundary
      shadowRoot.innerHTML = html;
    }
  }, [html]);

  return <div ref={containerRef} />;
}

// --- THE MAIN PAGE COMPONENT ---
export default function Page({ params }: { params: any }) {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const slug  = (await params).slug;
        const url = `https://raw.githubusercontent.com/hostel-hub/htm-pages/main/${slug}.html`;
        
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch');
        
        const text = await res.text();
        setHtmlContent(text);
      } catch (err) {
        console.error("Error loading HTML:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params]);

  if (loading) return <div className="p-10">Loading design...</div>;

  return (
    <main className="min-h-screen">
      {/* The Shadow DOM ensures the GitHub HTML ignores your 
          app's Tailwind and uses its own internal styles.
      */}
      <IsolatedHtml html={htmlContent} />
    </main>
  );
}
