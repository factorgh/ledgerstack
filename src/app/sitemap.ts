import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ledgerstacktechnologies.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/training",
    "/web-design",
    "/support",
    "/email",
    "/clients",
    "/contact",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
