import { useEffect } from 'react';

interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export const useStructuredData = (schema: SchemaMarkup) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
};
