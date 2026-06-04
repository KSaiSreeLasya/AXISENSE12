# SEO Setup & Configuration Guide

This document outlines all SEO optimizations implemented for Axisense.

## ✅ Implemented Features

### 1. **Meta Tags & Head Configuration**
- ✅ Base meta tags in `index.html`:
  - Meta charset (UTF-8)
  - Viewport meta tag for responsive design
  - Meta description with primary business focus
  - Meta keywords
  - Author and robots meta tags
  - Language and revisit-after tags

### 2. **Favicon & App Icons**
- ✅ All icons from `public/` folder integrated in `index.html`:
  - `favicon.ico` - Primary favicon
  - `favicon-32x32.png` - Standard favicon
  - `favicon-16x16.png` - Small favicon
  - `favicon-48x48.png` - Medium favicon
  - `favicon-64x64.png` - Large favicon
  - `favicon-192x192.png` - Mobile/Android icon
  - `apple-touch-icon.png` - iOS home screen icon
  - `favicon.svg` - Scalable SVG favicon

### 3. **Canonical Tags**
- ✅ Implemented via `useSEO` hook
- ✅ Each page has its own canonical URL to prevent duplicate content issues
- Pages covered:
  - `/` - `https://axisense.io/`
  - `/solutions` - `https://axisense.io/solutions`
  - `/innovation` - `https://axisense.io/innovation`
  - `/use-cases` - `https://axisense.io/use-cases`
  - `/about` - `https://axisense.io/about`
  - `/contact` - `https://axisense.io/contact`

### 4. **Page-Specific Meta Titles & Descriptions**
- ✅ Created `useSEO` hook for dynamic metadata
- ✅ Applied to all major pages with unique SEO content:

**Home Page** (`/`)
- Title: "AxiSense | AI-Powered Analytics & Smart Solutions"
- Description: "Axisense delivers innovative AI, analytics, automation, and digital solutions that help businesses improve efficiency, gain insights, and drive sustainable growth."

**Solutions Page** (`/solutions`)
- Title: "AxiSense | Business Intelligence, AI & Automation"
- Description: "Empower your organization with advanced AI technologies, business intelligence tools, and automation solutions tailored for modern business challenges."

**Innovation Page** (`/innovation`)
- Title: "AxiSense | Advanced AI & Digital Transformation Solutions"
- Description: "Explore cutting-edge AI, machine learning, analytics, and digital transformation services that help businesses stay ahead in a competitive market."

**Use Cases Page** (`/use-cases`)
- Title: "AxiSense | Data-Driven Innovation for Business Growth"
- Description: "Leverage the power of data analytics, artificial intelligence, and digital transformation services to accelerate growth and improve decision-making."

**About Page** (`/about`)
- Title: "AxiSense | Smart Analytics for Smarter Businesses"
- Description: "Axisense helps organizations unlock valuable insights through AI-powered analytics, intelligent automation, and innovative technology solutions."

**Contact Page** (`/contact`)
- Title: "AxiSense | Intelligent Technology Solutions"
- Description: "From analytics to automation, Axisense provides innovative technology solutions that streamline operations and support business success."

### 5. **Sitemap**
- ✅ Created `public/sitemap.xml` with all pages
- ✅ Includes:
  - All 6 main pages
  - Last modified dates
  - Change frequency (weekly for main pages, monthly for secondary)
  - Priority levels (1.0 for home, 0.9 for main sections, 0.7-0.8 for secondary)
- ✅ Registered in `robots.txt`

### 6. **Robots.txt**
- ✅ Updated `public/robots.txt` with:
  - Sitemap URL reference
  - User-agent rules for all major search engines and bots
  - Crawl-delay settings for optimal crawling
  - Allow rules for public content
  - Comments for future admin/private paths

### 7. **Open Graph Tags**
- ✅ Added to `index.html`:
  - `og:type`
  - `og:url`
  - `og:title`
  - `og:description`
  - `og:site_name`
- ✅ Dynamically updated per page via `useSEO` hook

### 8. **Twitter Card Tags**
- ✅ Added to `index.html`:
  - `twitter:card`
  - `twitter:url`
  - `twitter:title`
  - `twitter:description`

### 9. **Structured Data (JSON-LD)**
- ✅ Created `useStructuredData` hook for Schema.org markup
- ✅ Organization schema added to homepage with:
  - Name, URL, logo
  - Description
  - Social media links

## 📁 Files Created/Modified

### Created:
- `client/hooks/useSEO.ts` - Dynamic SEO metadata hook
- `client/hooks/useStructuredData.ts` - JSON-LD schema markup hook
- `public/sitemap.xml` - XML sitemap for search engines
- `public/metadata.json` - Centralized metadata configuration
- `SEO_SETUP.md` - This documentation file

### Modified:
- `index.html` - Added comprehensive SEO tags and favicon references
- `client/pages/Index.tsx` - Added useSEO hook
- `client/pages/Solutions.tsx` - Added useSEO hook
- `client/pages/Innovation.tsx` - Added useSEO hook
- `client/pages/UseCases.tsx` - Added useSEO hook
- `client/pages/About.tsx` - Added useSEO hook
- `client/pages/Contact.tsx` - Added useSEO hook
- `public/robots.txt` - Updated with sitemap and crawl-delay

## 🚀 How to Use

### Adding SEO to New Pages
```typescript
import { useSEO } from "@/hooks/useSEO";
import { useStructuredData } from "@/hooks/useStructuredData";

export default function MyPage() {
  useSEO({
    title: "Page Title | AxiSense",
    description: "Unique page description...",
    canonical: "https://axisense.io/my-page",
    ogTitle: "Optional OG Title",
    ogDescription: "Optional OG Description",
  });

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Article Title',
    // ... more schema properties
  });

  return (
    // Your page content
  );
}
```

### Updating Metadata
- Edit `public/metadata.json` for centralized metadata
- Update individual page `useSEO` calls for specific pages
- Modify `index.html` for global default tags

### Sitemap Updates
- Update `public/sitemap.xml` when adding/removing pages
- Ensure all routes are included with appropriate priority

## 📊 SEO Best Practices Applied

1. ✅ **Unique Meta Titles** - Each page has a unique, keyword-rich title
2. ✅ **Meta Descriptions** - All pages include compelling descriptions (120-160 chars)
3. ✅ **Canonical Tags** - Prevents duplicate content issues
4. ✅ **Responsive Design** - Viewport meta tag ensures mobile compatibility
5. ✅ **Favicon** - Multiple formats for all devices
6. ✅ **Structured Data** - JSON-LD schema for rich snippets
7. ✅ **Open Graph** - Social media sharing optimization
8. ✅ **Robots.txt** - Guides search engine crawlers
9. ✅ **Sitemap** - Helps search engines discover all pages
10. ✅ **Fast Loading** - Server configured to serve static assets efficiently

## 🔍 SEO Checklist for Future Development

- [ ] Add more structured data schemas (BreadcrumbList, FAQPage, etc.)
- [ ] Implement internal linking strategy
- [ ] Add Schema markup for LocalBusiness (if applicable)
- [ ] Create blog/content sections with article schema
- [ ] Implement hreflang tags for multilingual content (if needed)
- [ ] Monitor Core Web Vitals and performance
- [ ] Set up Google Search Console and Bing Webmaster Tools
- [ ] Create performance monitoring dashboard
- [ ] Add cookie consent banner (optional for EU visitors)
- [ ] Implement security headers (HTTPS, CSP, etc.)

## 🛠️ Testing & Validation

Use these tools to validate your SEO setup:
1. **Google Search Console** - https://search.google.com/search-console
2. **Bing Webmaster Tools** - https://www.bing.com/webmasters
3. **Lighthouse** - Built into Chrome DevTools
4. **Schema.org Validator** - https://validator.schema.org/
5. **Open Graph Debugger** - https://developers.facebook.com/tools/debug/
6. **Twitter Card Validator** - https://cards-dev.twitter.com/validator

## 📝 Next Steps

1. Submit sitemap to Google Search Console
2. Test all pages with Lighthouse
3. Monitor search performance in GSC
4. Add additional schema markups as content grows
5. Implement analytics to track SEO performance
6. Regular content updates to improve rankings
