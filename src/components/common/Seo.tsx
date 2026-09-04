import { useEffect } from 'react';
import { env } from '../../config/env';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export function Seo({ title, description, canonical }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | ${env.appName}`;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('description', description);
    setMeta('robots', 'index,follow');

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, canonical]);

  return null;
}
