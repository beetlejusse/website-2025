const siteURL = process.env.NEXT_PUBLIC_WEBSITE_URL 
const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL 
const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL 
const instagramURL = process.env.NEXT_PUBLIC_INSTAGRAM_URL 
const twitterURL = process.env.NEXT_PUBLIC_TWITTER_URL
const ieeeMail = process.env.NEXT_PUBLIC_IEEE_MAIL_ADDRESS
const collegeURL = process.env.NEXT_PUBLIC_COLLEGE_URL

export const siteConfig = {
  name: "IEEE BPIT",
  fullName: "IEEE BPIT - Student Branch",
  description:
    "IEEE BPIT is the official student branch of the Institute of Electrical and Electronics Engineers at Bhagwan Parshuram Institute of Technology, Delhi.",
  url: siteURL,
  ogImage: "/ieee-cover.png",
  logo: "/ieee-logo.jpg",
  links: {
    github: githubURL,
    linkedin: linkedinURL,
    instagram: instagramURL,
    twitter: twitterURL,
  },
  contact: {
    email: ieeeMail,
    address: "Bhagwan Parshuram Institute of Technology, PSP-4, Sector 17, Rohini, Delhi - 110089",
  },
  college: {
    name: "Bhagwan Parshuram Institute of Technology",
    shortName: "BPIT",
    url: collegeURL,
  },
  ieee: {
    section: "IEEE Delhi Section",
    sectionUrl: "https://ieeedelhi.org",
    mainUrl: "https://www.ieee.org",
  },
};

export const defaultKeywords = [
  "IEEE",
  "IEEE BPIT",
  "IEEE Student Branch",
  "BPIT",
  "Bhagwan Parshuram Institute of Technology",
  "Delhi",
  "India",
  "Engineering",
  "Technology",
  "Electronics",
  "Computer Science",
  "Workshops",
  "Hackathons",
  "Technical Events",
  "Student Organization",
  "IEEE Delhi Section",
];


export function generateKeywords(pageKeywords: string[]): string[] {
  return [...new Set([...pageKeywords, ...defaultKeywords])];
}


export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}


export function generateOgMeta({
  title,
  description,
  image,
  path = "",
  type = "website",
}: {
  title: string;
  description: string;
  image?: string;
  path?: string;
  type?: "website" | "article" | "profile";
}) {
  return {
    title,
    description,
    url: getCanonicalUrl(path),
    siteName: siteConfig.fullName,
    images: [
      {
        url: image || siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_IN",
    type,
  };
}

export function generateTwitterMeta({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [image || siteConfig.ogImage],
    creator: "@IEEEBPIT",
    site: "@IEEEBPIT",
  };
}

export function generateEventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  organizer = siteConfig.fullName,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  organizer?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
      },
    },
    image: image || siteConfig.ogImage,
    organizer: {
      "@type": "Organization",
      name: organizer,
      url: siteConfig.url,
    },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: url || siteConfig.url,
  };
}


export function generatePersonSchema({
  name,
  jobTitle,
  image,
  url,
}: {
  name: string;
  jobTitle: string;
  image?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    image: image ? `${siteConfig.url}${image}` : undefined,
    url: url || siteConfig.url,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    memberOf: {
      "@type": "Organization",
      name: "IEEE",
      url: "https://www.ieee.org",
    },
  };
}

/**
 * Generate JSON-LD structured data for a breadcrumb list
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${siteConfig.url}${url}`,
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
