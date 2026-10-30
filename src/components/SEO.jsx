import { useEffect } from "react";

const DEFAULT_TITLE = "Custom Software & AI Solutions | TriNetra Technologies";
const DEFAULT_DESCRIPTION = "TriNetra Technologies is a full-cycle IT services firm engineering custom web applications, native mobile apps, enterprise software, and autonomous AI automation.";
const DEFAULT_CANONICAL = "https://www.trinetra-technologies.in/";
const DEFAULT_IMAGE = "https://www.trinetra-technologies.in/logo.png";

export const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = DEFAULT_CANONICAL,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  twitterCard = "summary_large_image",
  keywords,
  schema
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely update or insert a meta tag
    const updateMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      if (content !== undefined && content !== null) {
        element.setAttribute("content", content);
      }
    };

    // 2. Primary Meta Tags
    updateMetaTag('meta[name="description"]', "name", "description", description);
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', "name", "keywords", keywords);
    }

    // 3. Canonical Tag
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // 4. Open Graph Social Tags
    updateMetaTag('meta[property="og:title"]', "property", "og:title", title);
    updateMetaTag('meta[property="og:description"]', "property", "og:description", description);
    updateMetaTag('meta[property="og:url"]', "property", "og:url", canonical || DEFAULT_CANONICAL);
    updateMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    updateMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
    updateMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "TriNetra Technologies");

    // 5. Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', "name", "twitter:card", twitterCard);
    updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    updateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    // 6. JSON-LD Dynamic Schema
    let schemaScript = document.getElementById("dynamic-page-schema");
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "dynamic-page-schema";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    // Cleanup when component unmounts (reset dynamic schema)
    return () => {
      const script = document.getElementById("dynamic-page-schema");
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonical, ogType, ogImage, twitterCard, keywords, schema]);

  return null;
};

export default SEO;

