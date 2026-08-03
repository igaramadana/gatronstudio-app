import { absoluteUrl, siteConfig } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      email: `mailto:${siteConfig.author.email}`,
      image: absoluteUrl(siteConfig.author.image),
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malang",
        addressCountry: "ID",
      },
      knowsAbout: [
        "Web Development",
        "Frontend Development",
        "Next.js",
        "React",
        "TypeScript",
        "FiveM Development",
        "Qbox",
      ],
      sameAs: Object.values(siteConfig.social),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
