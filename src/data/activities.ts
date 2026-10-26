export type ActivityKind = "Service Project" | "Startup" | "Professional";

export interface Activity {
  id: string;
  name: string;
  org: string;
  role: string;
  kind: ActivityKind;
  year: string;
  description: string;
  skills: string[];
  link?: string;
}

export const activities: Activity[] = [
  { id: "a1", name: "Digital Literacy for 40 Schools", org: "Leo District 306 A1", role: "Project Chair", kind: "Service Project", year: "2026", description: "Coordinated 80 volunteers to deliver coding workshops to 3,200 students.", skills: ["Leadership", "Teaching"] },
  { id: "a2", name: "NeuroLeaf AI", org: "NeuroLeaf (Pvt) Ltd", role: "Co-founder & CTO", kind: "Startup", year: "2025", description: "Adaptive learning platform piloted in 12 rural schools; seed funded.", skills: ["React", "AI", "Fundraising"], link: "https://example.com" },
  { id: "a3", name: "Logistics Dashboard", org: "Vantage Systems", role: "Software Engineer", kind: "Professional", year: "2024", description: "Built real-time fleet tracking used by 300+ drivers.", skills: ["TypeScript", "Node.js"] },
  { id: "a4", name: "Blood Donation Drive", org: "Leo Club of Colombo Central", role: "Club President", kind: "Service Project", year: "2024", description: "Collected 640 pints across 4 camps in partnership with NBTS.", skills: ["Events", "Partnerships"] },
];
