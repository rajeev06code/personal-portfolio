const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajeev Kumar Sharma",
    jobTitle: "Senior Software Engineer",
    url: "https://rajeev-sharma.netlify.app",
    sameAs: [
      "https://github.com/rajeev06code",
      "https://www.linkedin.com/in/rajeev-kumar-sharma-558500195/",
    ],
    email: "rajeev_sharma15@outlook.com",
    description:
      "Senior Software Engineer specializing in frontend development with React.js, Next.js, and modern web technologies.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dr. APJ Abdul Kalam University",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SEO;
