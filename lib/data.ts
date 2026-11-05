export const profile = {
  name: "Mahad Bule",
  github: "https://github.com/MahadBulle",
  portrait: "/portrait.svg",
};
export type Category = "All projects" | "Web apps" | "Websites" | "Dashboards";
export const categories: Category[] = ["All projects", "Web apps", "Websites", "Dashboards"];
export const projects = [
  {
    id: "studio", number: "01", name: "Community Website",
    subtitle: "A welcoming space for a meaningful story.",
    category: "Websites" as Category, type: "WEBSITE CONCEPT", visual: "community",
    tags: ["Next.js", "Tailwind CSS", "Responsive"],
    description: "An illustrative website concept showing a clear introduction, simple navigation and an inviting visual identity. This is a design example, not a completed client commission.",
    details: ["Editorial typography and a calm, accessible layout.", "Responsive composition for desktop and mobile.", "A visual starting point for an organisation or community website."],
    href: null, linkLabel: null,
  },
  {
    id: "invoice", number: "02", name: "Invoice Dashboard",
    subtitle: "A clearer view of everyday business.",
    category: "Dashboards" as Category, type: "DASHBOARD CONCEPT", visual: "invoice",
    tags: ["React", "TypeScript", "shadcn/ui"],
    description: "An illustrative invoice dashboard concept exploring how information can be presented clearly. This is an interface example, not a working invoicing service.",
    details: ["A concise summary of invoice statuses.", "Simple hierarchy for navigation and tabular information.", "Illustrative values only; no client or business data."],
    href: null, linkLabel: null,
  },
  {
    id: "pos", number: "03", name: "Point of Sale",
    subtitle: "A little more order at the counter.",
    category: "Web apps" as Category, type: "APPLICATION CONCEPT", visual: "pos",
    tags: ["React", "Tailwind CSS", "Interface design"],
    description: "An illustrative point-of-sale interface exploring product selection and order layout. This is a visual concept, not a production retail application.",
    details: ["A compact product grid and category navigation.", "A separate order area for clear hierarchy.", "A visual example of an application interface."],
    href: null, linkLabel: null,
  },
  {
    id: "reporting", number: "04", name: "Analytics Overview",
    subtitle: "Information with room to breathe.",
    category: "Dashboards" as Category, type: "ANALYTICS CONCEPT", visual: "data",
    tags: ["TypeScript", "Dashboard UI", "Data visualisation"],
    description: "An illustrative reporting dashboard concept with visual summaries and charts. The shapes and values are decorative examples, not actual performance metrics.",
    details: ["A clear layout for summary cards and charts.", "A restrained palette and readable visual hierarchy.", "Illustrative chart shapes with no real-world data claims."],
    href: null, linkLabel: null,
  },
];
export type Project = (typeof projects)[number];
export const skills = [
  { number: "01", title: "Thoughtful interfaces", description: "Clear structure, considered details and a human touch.", tools: ["Next.js", "React", "TypeScript"] },
  { number: "02", title: "Responsive by design", description: "Layouts that feel at home on screens of every size.", tools: ["Tailwind CSS", "Responsive layouts", "Accessibility"] },
  { number: "03", title: "Built to grow", description: "Reusable components and a consistent visual language.", tools: ["shadcn/ui", "Radix UI", "Component systems"] },
];
