export const siteMeta = {
  name: "Kamsoft Technologies,ERP/API Solution and Service Provider,Goa,Pune and Delhi",
  url: "https://kamsoft.co.in",
  defaultImage: "https://kamsoft.co.in/logo.png"
}

export function getSchemaOrg({ type, title, url }) {
  if (type === "organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: title,
      url,
      logo: `${url}/logo.png`
    }
  }

  if (type === "article") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      mainEntityOfPage: url,
      publisher: {
        "@type": "Organization",
        name: "Kamsoft Technologies",
        logo: {
          "@type": "ImageObject",
          url: `${url}/logo.png`
        }
      }
    }
  }

  return null
}
