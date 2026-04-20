import Head from "next/head";
import { SEOProps } from "@/types";
import { SITE_CONFIG } from "@/constants";

interface SEOHeadProps extends SEOProps {
  children?: React.ReactNode;
}

export default function SEOHead({
  title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  ogImage = SITE_CONFIG.ogImage,
  canonicalUrl,
  noIndex = false,
  children,
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;
  const keywordsString = keywords.join(", ");

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl || SITE_CONFIG.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Favicon — same asset as navbar brand mark */}
      <link rel="icon" type="image/png" href="/images/navbar/flower.png" />
      <link rel="apple-touch-icon" href="/images/navbar/flower.png" />

      {children}
    </Head>
  );
}
