export type MemberType = "Leo" | "Lion" | "Leo-Lion";
export type Status = "Open for Roles" | "Hiring" | "Open for Startup Collaboration";

export interface Profile {
  id: string;
  name: string;
  initials: string;
  memberType: MemberType;
  club: string;
  district: string;
  title: string;
  verified: boolean;
  skills: string[];
  status: Status;
  bio: string;
}

export const profiles: Profile[] = [
  { id: "p1", name: "Kasun Dissanayake", initials: "KD", memberType: "Leo", club: "Leo Club of Colombo Central", district: "306 A1", title: "Tech Founder", verified: true, skills: ["React", "Node.js", "Product"], status: "Hiring", bio: "Building NeuroLeaf AI. Former district IT director." },
  { id: "p2", name: "Sarah Mendis", initials: "SM", memberType: "Lion", club: "Lions Club of Kandy", district: "306 B2", title: "Managing Director", verified: true, skills: ["Strategy", "Marketing", "Leadership"], status: "Hiring", bio: "MD at Meridian Holdings, mentoring young marketers." },
  { id: "p3", name: "Nimesha Perera", initials: "NP", memberType: "Leo", club: "Leo Club of Moratuwa", district: "306 A1", title: "District Secretary", verified: true, skills: ["Graphic Design", "Figma", "Branding"], status: "Open for Roles", bio: "Designer who has led visual identity for 12 district events." },
  { id: "p4", name: "Rohan Fernando", initials: "RF", memberType: "Lion", club: "Lions Club of Negombo", district: "306 A2", title: "Finance Director", verified: true, skills: ["Accounting", "Audit", "Mentorship"], status: "Hiring", bio: "CA with 20 years in agri-export finance." },
  { id: "p5", name: "Tharushi Wickrama", initials: "TW", memberType: "Leo", club: "Leo Club of Galle", district: "306 B1", title: "Startup Founder", verified: false, skills: ["Project Management", "Sustainability"], status: "Open for Startup Collaboration", bio: "Founder of GreenCycle Labs. Seeking an ops co-founder." },
  { id: "p6", name: "Dinuka Ranasinghe", initials: "DR", memberType: "Leo-Lion", club: "Lions Club of Colombo Metro", district: "306 A1", title: "Club President", verified: true, skills: ["Video", "Events", "Public Speaking"], status: "Open for Roles", bio: "Transitioned from Leo to Lion; events and content specialist." },
  { id: "p7", name: "Ishara Jayasinghe", initials: "IJ", memberType: "Leo", club: "Leo Club of Kelaniya", district: "306 A2", title: "CEO, PulseMetrics", verified: true, skills: ["Python", "Data Analysis", "SQL"], status: "Hiring", bio: "Data for social good. Hiring analysts." },
  { id: "p8", name: "Malini Silva", initials: "MS", memberType: "Lion", club: "Lions Club of Kurunegala", district: "306 C1", title: "Club Treasurer", verified: true, skills: ["Accounting", "Fundraising"], status: "Open for Startup Collaboration", bio: "Angel investor in two Leo-founded ventures." },
];

export const currentUser = {
  name: "Kasun Dissanayake",
  initials: "KD",
  club: "Leo Club of Colombo Central · District 306 A1",
  title: "Startup Founder & District IT Director",
  memberType: "Leo" as MemberType,
  skills: ["React", "TypeScript", "Node.js", "Product Strategy", "Public Speaking", "Team Leadership"],
  metrics: { serviceHours: 486, projectsLed: 14, endorsements: 62 },
  badges: [
    { name: "Verified Member", desc: "Identity confirmed by district" },
    { name: "Project Champion", desc: "Led 10+ service projects" },
    { name: "Startup Founder", desc: "Founded a registered venture" },
    { name: "Mentor", desc: "Mentored 5+ members" },
  ],
};

export const skillOptions = ["React", "Graphic Design", "Accounting", "Project Management", "Python", "Marketing", "Figma"];
export const districts = ["306 A1", "306 A2", "306 B1", "306 B2", "306 C1"];
