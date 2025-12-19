"use client";

import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}


export function JsonLd({ data }: JsonLdProps) {
  const jsonLdData = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data;

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdData, null, 0),
      }}
      strategy="afterInteractive"
    />
  );
}

export function JsonLdServer({ data }: JsonLdProps) {
  const jsonLdData = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdData, null, 0),
      }}
    />
  );
}

export default JsonLd;
