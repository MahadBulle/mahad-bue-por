export const profile = {
  "name": "Mahad Bule",
  "github": "https://github.com/MahadBulle",
  "portrait": "https://mahadbulle-portweb.vercel.app/hero/mahad-suit.png",
  "email": "naifbulle@gmail.com",
  "phone": "+252618581750",
  "whatsapp": "252618581750",
  "location": "Mogadishu, Somalia",
  "cv": "https://mahadbulle-portweb.vercel.app/mahadbulleCV2025.pdf",
  "facebook": "https://www.facebook.com/mahad.husni",
  "instagram": "https://www.instagram.com/mahad.husni"
};
export type Category = "All projects" | "WordPress" | "Next.js" | "React & MERN";
export const categories: Category[] = ["All projects", "WordPress", "Next.js", "React & MERN"];
export interface Project {id:string;name:string;category:Category;image:string;description:string;subtitle:string;href:string|null;linkLabel:string;tags:string[];number:string;type:string;details:string[]}
export const projects: Project[] = [
  {
    "id": "kacdo",
    "name": "KACDO",
    "category": "WordPress",
    "image": "https://mahadbulle-portweb.vercel.app/work/kacdo.png",
    "description": "A modern WordPress website presenting community programmes, news and impact across Somalia.",
    "subtitle": "A modern WordPress website presenting community programmes, news and impact across Somalia.",
    "href": "https://kacdo.org/",
    "linkLabel": "Visit website",
    "tags": [
      "WordPress",
      "Web design"
    ],
    "number": "01",
    "type": "WordPress",
    "details": [
      "WordPress · Website development",
      "Web design · Website development"
    ]
  },
  {
    "id": "barwaqo",
    "name": "Barwaqo Multibusiness",
    "category": "Next.js",
    "image": "https://mahadbulle-portweb.vercel.app/work/barwaqo.png",
    "description": "A unified system for water-well and livestock businesses, with separate markets and controlled access.",
    "subtitle": "A unified system for water-well and livestock businesses, with separate markets and controlled access.",
    "href": null,
    "linkLabel": "Visit website",
    "tags": [
      "Next.js",
      "Supabase",
      "Authentication"
    ],
    "number": "02",
    "type": "Next.js",
    "details": [
      "Next.js · Application development",
      "Supabase · Application development",
      "Authentication · Application development"
    ]
  },
  {
    "id": "portfolio",
    "name": "Next.js Portfolio",
    "category": "Next.js",
    "image": "https://mahadbulle-portweb.vercel.app/work/wo.jpg",
    "description": "A personal portfolio presenting development work, experience and services.",
    "subtitle": "A personal portfolio presenting development work, experience and services.",
    "href": "https://mahadbulle-portweb.vercel.app",
    "linkLabel": "Visit website",
    "tags": [
      "Next.js",
      "React",
      "Tailwind CSS"
    ],
    "number": "03",
    "type": "Next.js",
    "details": [
      "Next.js · Application development",
      "React · Application development",
      "Tailwind CSS · Application development"
    ]
  },
  {
    "id": "novelty",
    "name": "Novelty",
    "category": "WordPress",
    "image": "https://mahadbulle-portweb.vercel.app/work/novelty.jpg",
    "description": "A company website bringing business information and an online presence together.",
    "subtitle": "A company website bringing business information and an online presence together.",
    "href": "https://novelty.so/",
    "linkLabel": "Visit website",
    "tags": [
      "WordPress",
      "Web design"
    ],
    "number": "04",
    "type": "WordPress",
    "details": [
      "WordPress · Website development",
      "Web design · Website development"
    ]
  },
  {
    "id": "qorax",
    "name": "Qoraxsoor Energy",
    "category": "WordPress",
    "image": "https://mahadbulle-portweb.vercel.app/work/qorax.jpg",
    "description": "A business website introducing Qoraxsoor Energy and its services.",
    "subtitle": "A business website introducing Qoraxsoor Energy and its services.",
    "href": "https://qoraxsoor.com/",
    "linkLabel": "Visit website",
    "tags": [
      "WordPress",
      "Web design"
    ],
    "number": "05",
    "type": "WordPress",
    "details": [
      "WordPress · Website development",
      "Web design · Website development"
    ]
  },
  {
    "id": "react",
    "name": "React Portfolio",
    "category": "React & MERN",
    "image": "https://mahadbulle-portweb.vercel.app/work/reactport.jpg",
    "description": "A React-based portfolio showcasing projects and development skills.",
    "subtitle": "A React-based portfolio showcasing projects and development skills.",
    "href": "https://mahadbulle-portfolio.vercel.app/",
    "linkLabel": "Visit website",
    "tags": [
      "React",
      "CSS"
    ],
    "number": "06",
    "type": "React & MERN",
    "details": [
      "React · Application development",
      "CSS · Application development"
    ]
  },
  {
    "id": "invoice",
    "name": "Invoice Generator",
    "category": "React & MERN",
    "image": "https://mahadbulle-portweb.vercel.app/work/invoice.jpg",
    "description": "A web application focused on creating invoices through a dedicated interface.",
    "subtitle": "A web application focused on creating invoices through a dedicated interface.",
    "href": "https://github.com/MahadBulle/invoiceFrontend",
    "linkLabel": "View source",
    "tags": [
      "React",
      "Web application"
    ],
    "number": "07",
    "type": "React & MERN",
    "details": [
      "React · Application development",
      "Web application · Application development"
    ]
  },
  {
    "id": "nova",
    "name": "Nova Technology",
    "category": "WordPress",
    "image": "https://mahadbulle-portweb.vercel.app/work/nova.jpg",
    "description": "A company website presenting Nova Technology and its information online.",
    "subtitle": "A company website presenting Nova Technology and its information online.",
    "href": "https://novatech.so/",
    "linkLabel": "Visit website",
    "tags": [
      "WordPress",
      "Web design"
    ],
    "number": "08",
    "type": "WordPress",
    "details": [
      "WordPress · Website development",
      "Web design · Website development"
    ]
  },
  {
    "id": "deero",
    "name": "Deero Institute",
    "category": "WordPress",
    "image": "https://mahadbulle-portweb.vercel.app/work/institute.jpg",
    "description": "An education website introducing the institute and its learning offerings.",
    "subtitle": "An education website introducing the institute and its learning offerings.",
    "href": "https://institute.deero.so/",
    "linkLabel": "Visit website",
    "tags": [
      "WordPress",
      "Education"
    ],
    "number": "09",
    "type": "WordPress",
    "details": [
      "WordPress · Website development",
      "Education · Website development"
    ]
  },
  {
    "id": "albirri",
    "name": "Albirri Hospital",
    "category": "WordPress",
    "image": "https://mahadbulle-portweb.vercel.app/work/albiri.jpg",
    "description": "A healthcare website presenting the hospital and its information online.",
    "subtitle": "A healthcare website presenting the hospital and its information online.",
    "href": "https://albirri.deero.so/",
    "linkLabel": "Visit website",
    "tags": [
      "WordPress",
      "Healthcare"
    ],
    "number": "10",
    "type": "WordPress",
    "details": [
      "WordPress · Website development",
      "Healthcare · Website development"
    ]
  },
  {
    "id": "beta",
    "name": "Beta Real Estate",
    "category": "React & MERN",
    "image": "https://mahadbulle-portweb.vercel.app/work/beta.jpg",
    "description": "A property-focused web application for real estate.",
    "subtitle": "A property-focused web application for real estate.",
    "href": "https://beta-houses.vercel.app/",
    "linkLabel": "Visit website",
    "tags": [
      "React",
      "Web application"
    ],
    "number": "11",
    "type": "React & MERN",
    "details": [
      "React · Application development",
      "Web application · Application development"
    ]
  }
];
export const skills = [{"number":"01","title":"Web design","description":"Clear, responsive interfaces that help people find what they need.","tools":["Figma","Interface design","Responsive design"]},{"number":"02","title":"Full-stack development","description":"Websites and applications matched to the needs of your project.","tools":["Next.js","React","Node.js","Express","MongoDB","WordPress","MySQL"]},{"number":"03","title":"Mobile applications","description":"Mobile interfaces with attention to navigation and everyday workflows.","tools":["React Native","Mobile interfaces","Usability"]}];
