/**
 * Team member data — static for now.
 * Future: replace this import with a `useQuery` from `services/teamService.ts`
 * once a CMS or API endpoint is available, without touching consuming components
 * as long as their prop contracts stay stable.
 */
import BasemElishaaImage from "@/assets/Team/basem_elishaa.webp";
import AshrafMufrehImage from "@/assets/Team/ashraf_mufreh.webp";
import ArleneRupidoImage from "@/assets/Team/arlene_rupido.webp";
import HananFikriImage from "@/assets/Team/hanan_fikri.webp";

export const leadership = [
  {
    name: "Basem Elishaa",
    role: "Commercial Manager",
    department: "Commercial & Business Development",
    email: "belishaa@rimalgroupqa.com",
    photo: BasemElishaaImage,
    description:
      "Drives commercial growth and business development across Rimal Group's portfolio. Leads market entry strategies, builds and manages key client relationships, and structures commercial agreements that deliver sustainable revenue growth and long-term competitive advantage aligned with the group's strategic vision. Proactively identifies new business opportunities and initiates strategic plans in line with the organization's expansion goals. Brings over 2 decades of experience across the GCC, with deep expertise in the Qatar market.",
    expertise: [
      "Commercial Strategy & Growth",
      "Business Development",
      "Market Entry & Expansion",
      "Key Account Management",
      "Contract Negotiation & Structuring",
      "Strategic Planning & Execution",
      "Revenue Optimization",
      "Leadership & Team Development",
    ],
    linkedin: "https://www.linkedin.com/in/basem-elishaa/",
  },
  {
    name: "Ashraf Mufreh",
    role: "F&B Operation Manager",
    department: "Food & Beverage",
    email: "amufreh@rimalgroupqa.com",
    photo: AshrafMufrehImage,
    description:
      "A highly accomplished Food Operations Manager with more than 20 years of experience across Qatar, the UAE, and Jordan. His expertise spans hotels, premium restaurants, fast food, and retail dining operations. Recognized for his strong leadership, operational excellence, and results-driven approach, he has successfully managed complex F&B operations and business growth initiatives. He joined Rimal Group to lead the Food & Beverage Division, driving expansion strategies, operational performance, and the development of new F&B concepts across the organization.",
    expertise: [
      "F&B Operations Management",
      "Multi-Unit Operations Leadership",
      "Restaurant & Hospitality Management",
      "Budgeting & Cost Control",
      "Team Development",
      "Performance Management",
      "Quality Assurance",
      "Strategic Planning & Process Optimization",
    ],
    linkedin: "https://www.linkedin.com/in/ashraf-mufreh-6b9861348/",
  },
  {
    name: "Arlene Rupido",
    role: "Operation Assistant",
    department: "Operations & Administration",
    email: "arupido@rimalgroupqa.com",
    photo: ArleneRupidoImage,
    description:
      "A highly experienced Operations Assistant with over 25 years of expertise across Qatar, UAE, and Philippines. Her professional background spans administration, finance, accounting, in various fields like contracting, graphic design, food & beverage, and retail sectors. Recognized for her strong organizational skills, financial acumen, and attention to detail, she has successfully supported business operations, streamlined administrative processes, and enhanced financial controls across diverse industries. Her broad experience and commitment to excellence make her a valuable contributor to organizational efficiency and growth.",
    expertise: [
      "Administrative Operations Management",
      "Financial Administration & Reporting",
      "Accounting & Bookkeeping",
      "Budget Monitoring & Cost Control",
      "Contract Administration & Documentation",
      "Retail & F&B Operations Support",
      "Process Improvement & Office Coordination",
      "Records Management & Compliance Control",
    ],
    linkedin: "https://www.linkedin.com/in/arlene-rupido-648584247/",
  },
  {
    name: "Hanan Fikri",
    role: "Social Media & Admin Assistant",
    department: "Marketing & Administration",
    email: "admin@rimalgroupqa.com",
    photo: HananFikriImage,
    description:
      "An enthusiastic and customer-focused professional with a strong background in sales, retail, customer service, and fashion trends. Her passion for social media, digital engagement, and emerging market trends makes her a valuable member of the marketing team. At Rimal Group, she manages the company's social media platforms and related administrative activities, contributing to brand visibility and audience engagement. Rimal believes that while experience brings valuable expertise, the energy, creativity, and fresh perspectives of a new generation are equally important in driving innovation and business growth.",
    expertise: [
      "Social Media Management",
      "Customer Service Excellence",
      "Retail Sales & Client Engagement",
      "Fashion & Lifestyle Trends",
      "Content Coordination & Scheduling",
      "Community Engagement & Brand Interaction",
      "Market Trend Monitoring",
      "Communication & Relationship Building",
    ],
    linkedin: "https://www.linkedin.com/in/hanane-fikri-754305294/",
  },
];
