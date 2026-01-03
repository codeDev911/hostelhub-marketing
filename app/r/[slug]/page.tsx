'use client';

import React, { useState, useEffect } from 'react';
import * as Babel from '@babel/standalone';
import Image from 'next/image';
import Link from 'next/link';
import * as Lucide from 'lucide-react';
import { useParams } from 'next/navigation';

export default function RemoteLoader() {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const params = useParams();
  const { slug } = params;
  useEffect(() => {
    async function loadComponent() {
      try {
        // 1. Add a timestamp to bypass GitHub's cache
        const url = `https://raw.githubusercontent.com/hostel-hub/hb-pages/master/${slug}.js?t=${Date.now()}`;
        const res = await fetch(url);
        let rawCode = await res.text();

        // 2. PRE-CLEAN: Remove all import and export statements manually
        // This prevents Babel from complaining about sourceType
        const cleanedCode = rawCode
          .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, '') // Remove imports
          .replace(/export\s+default\s+/g, '')                  // Remove 'export default'
          .replace(/export\s+/g, '');                           // Remove any other 'export'

        // 3. TRANSFORM: Use 'unambiguous' to let Babel decide
        const transformedCode = Babel.transform(cleanedCode, {
          presets: ['react'],
          sourceType: 'unambiguous', 
        }).code;

        // 4. EXECUTE: Inject the dependencies
        const result = new Function('React', 'Image', 'Link', 'Lucide', `
          ${transformedCode}; 
          return {DefaultComponent,metaData};
        `)(React, Image, Link, Lucide);

        if (result.metaData) {
          document.title = result.metaData.title;
          
        }

        
        setComponent(() => result.DefaultComponent); 
      } catch (err) {
        console.error("Dynamic loading error:", err);
      }
    }
    loadComponent();
  }, [slug]);

  if (!Component) return <div className="p-20 text-center">Loading...</div>;

  const ValidComponent = Component;
  return <ValidComponent />;
}