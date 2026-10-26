export type RoleType = "Full-time" | "Startup Team" | "Internship" | "Freelance/Task";
export type PosterType = "Leo Startup" | "Lion Enterprise" | "Club Initiative";
export type WorkMode = "Remote" | "On-site" | "Hybrid";

export interface Job {
  id: string;
  title: string;
  company: string;
  poster: { name: string; member: "Leo" | "Lion"; title: string; verified: boolean };
  posterType: PosterType;
  roleType: RoleType;
  location: string;
  mode: WorkMode;
  compensation: string;
  skills: string[];
  description: string;
  postedAgo: string;
  featured?: boolean;
  urgent?: boolean;
}

export const jobs: Job[] = [
  { id: "j1", title: "Frontend Developer", company: "NeuroLeaf AI (Leo-founded)", poster: { name: "Kasun D.", member: "Leo", title: "Tech Founder", verified: true }, posterType: "Leo Startup", roleType: "Startup Team", location: "Colombo", mode: "Remote", compensation: "LKR 180k/mo + equity", skills: ["React", "TypeScript", "Tailwind"], description: "Join a Leo-founded AI startup building assistive learning tools for rural schools.", postedAgo: "2d ago", featured: true, urgent: true },
  { id: "j2", title: "Marketing Intern", company: "Meridian Holdings", poster: { name: "Sarah M.", member: "Lion", title: "Managing Director", verified: true }, posterType: "Lion Enterprise", roleType: "Internship", location: "Kandy", mode: "Hybrid", compensation: "LKR 45k/mo stipend", skills: ["Social Media", "Copywriting", "Canva"], description: "Six-month internship in brand and digital marketing with mentorship from senior leadership.", postedAgo: "4d ago", featured: true },
  { id: "j3", title: "UI Designer for District Event", company: "Leo District 306 A1", poster: { name: "Nimesha P.", member: "Leo", title: "District Secretary", verified: true }, posterType: "Club Initiative", roleType: "Freelance/Task", location: "Remote", mode: "Remote", compensation: "LKR 60k fixed", skills: ["Figma", "Branding", "UI Design"], description: "Design the visual identity and registration screens for the annual district convention.", postedAgo: "1d ago", featured: true },
  { id: "j4", title: "Junior Accountant", company: "Lanka Agro Exports", poster: { name: "Rohan F.", member: "Lion", title: "Finance Director", verified: true }, posterType: "Lion Enterprise", roleType: "Full-time", location: "Negombo", mode: "On-site", compensation: "LKR 120k/mo", skills: ["Accounting", "Excel", "QuickBooks"], description: "Support monthly reporting, reconciliation and audit prep for a growing export firm.", postedAgo: "5d ago" },
  { id: "j5", title: "Co-founder (Operations)", company: "GreenCycle Labs", poster: { name: "Tharushi W.", member: "Leo", title: "Startup Founder", verified: false }, posterType: "Leo Startup", roleType: "Startup Team", location: "Galle", mode: "Hybrid", compensation: "Equity 15–20%", skills: ["Operations", "Project Management", "Supply Chain"], description: "Looking for an operations co-founder for a plastic upcycling venture with pilot funding.", postedAgo: "3d ago", urgent: true },
  { id: "j6", title: "Video Editor (Micro-task)", company: "Leo Club of Colombo Central", poster: { name: "Dinuka R.", member: "Leo", title: "Club President", verified: true }, posterType: "Club Initiative", roleType: "Freelance/Task", location: "Remote", mode: "Remote", compensation: "LKR 15k per video", skills: ["Premiere Pro", "Storytelling"], description: "Edit three short reels covering our blood donation campaign.", postedAgo: "6h ago" },
  { id: "j7", title: "Software Engineering Intern", company: "Vantage Systems", poster: { name: "Anil K.", member: "Lion", title: "CTO", verified: true }, posterType: "Lion Enterprise", roleType: "Internship", location: "Colombo", mode: "On-site", compensation: "LKR 50k/mo stipend", skills: ["Node.js", "SQL", "React"], description: "Work alongside product engineers on internal tooling for logistics clients.", postedAgo: "1w ago" },
  { id: "j8", title: "Data Analyst", company: "PulseMetrics (Leo-founded)", poster: { name: "Ishara J.", member: "Leo", title: "CEO", verified: true }, posterType: "Leo Startup", roleType: "Full-time", location: "Remote", mode: "Remote", compensation: "LKR 150k/mo", skills: ["Python", "SQL", "Power BI"], description: "Turn NGO program data into dashboards that help clubs measure service impact.", postedAgo: "2d ago" },
  { id: "j9", title: "Grant Proposal Writer", company: "Lions Club of Kurunegala", poster: { name: "Malini S.", member: "Lion", title: "Club Treasurer", verified: true }, posterType: "Club Initiative", roleType: "Freelance/Task", location: "Remote", mode: "Remote", compensation: "LKR 40k fixed", skills: ["Writing", "Research", "Fundraising"], description: "Draft a proposal for a community eye-care camp funded by LCIF.", postedAgo: "3d ago" },
];

export const roleTypes: RoleType[] = ["Full-time", "Startup Team", "Internship", "Freelance/Task"];
export const posterTypes: PosterType[] = ["Leo Startup", "Lion Enterprise", "Club Initiative"];
