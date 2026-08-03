export const siteConfig = {
  name: "Gatrons Studio",
  shortName: "Gatrons",
  url: "https://www.gatronstudio.online",
  title: "Gatrons Studio | Web & FiveM Developer Portfolio",
  description:
    "Portofolio Iga Ramadana Sahputra, Web Developer dan FiveM Developer di Malang yang membangun website modern, UI, dan sistem server yang cepat, rapi, serta scalable.",
  locale: "id_ID",
  language: "id",
  author: {
    name: "Iga Ramadana Sahputra",
    jobTitle: "Web Developer & FiveM Developer",
    email: "igrmdns085@gmail.com",
    location: "Malang, Indonesia",
    image: "/assets/igaramadana.webp",
  },
  social: {
    github: "https://github.com/igaramadana",
    linkedin:
      "https://www.linkedin.com/in/iga-ramadana-sahputra-5797b9287",
    instagram: "https://instagram.com/igarmdna",
  },
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
