import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Set title
    document.title = config.title;
    
    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical && config.canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (canonical && config.canonical) {
      canonical.setAttribute('href', config.canonical);
    }

    // Set OG tags
    const ogTags = [
      { property: 'og:title', content: config.ogTitle || config.title },
      { property: 'og:description', content: config.ogDescription || config.description },
      { property: 'og:type', content: config.ogType || 'website' },
    ];

    if (config.ogImage) {
      ogTags.push({ property: 'og:image', content: config.ogImage });
    }

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }, [config]);
};
