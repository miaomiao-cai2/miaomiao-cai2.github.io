export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Miaomiao Cai's Homepage",
  year: new Date().getFullYear(),
  description: "Miaomiao Cai's Homepage",
  navItems: [
    {
      label: "Bio",
      href: "/",
    },
    {
      label: "Publications",
      href: "/pub",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Education",
      href: "/education",
    },
    {
      label: "Honor",
      href: "/honor",
    },
    {
      label: "Services",
      href: "/services",
    },
  ],
  navMenuItems: [
    {
      label: "Publications",
      href: "/pub",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Education",
      href: "/education",
    },
    {
      label: "Honor",
      href: "/honor",
    },
    {
      label: "Services",
      href: "/services",
    },
  ],
  links: {
    github: "https://github.com/miaomiao-cai2",
    scholar: "https://scholar.google.com/citations?user=iqyPwGAAAAAJ&hl=zh-CN",
    email: "mailto:cmm.hfut@gmail.com",
  },
};
