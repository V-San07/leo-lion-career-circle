# Leo Lion Career Circle

Act as a Senior Web Developer and UI/UX Designer. Create a modern, professional, fully responsive, and highly interactive frontend web application using React (Next.js App Router or Vite), Tailwind CSS, Framer Motion, and Lucide React icons.

Output a clean, componentized folder structure with separate modular dummy data files (e.g., `src/data/jobs.ts`, `src/data/profiles.ts`, `src/data/activities.ts`) so the entire UI is fully populated and interactive out of the box.

The application is called "LeoConnect" The Career Hub for LEOs & Lions — a specialized career, micro-task, and professional networking platform connecting both Leos and Lions for job opportunities, startups, freelance hiring, and leadership-based networking.

---

### BRAND COLOR PALETTE & STYLING

- Primary Brand Palette:

  * Primary Navy Blue: #1C4F9C (Dominant brand headers, primary buttons, navigation accents)

  * Warm Gold / Yellow: #FCCB06 (Badges, verified checkmarks, accent callouts, highlights)

  * Crimson Red: #BF211E (CTA highlights, urgent/featured tags, key action accents)

  * Muted Sage Teal: #69A197 (Secondary background highlights, soft borders, subtle skill tags)

- Theme: Ultra-clean, modern corporate-meets-community aesthetic. Crisp, highly professional, with generous whitespace, subtle card borders, polished shadows, and soft gradients using the palette.

- Typography: Sans-serif (Inter / Plus Jakarta Sans). Professional line-heights and crisp visual hierarchy.

- Micro-interactions: Framer Motion for subtle page transitions, polished card hover elevations, smooth tab switching, modal slide-ins, and responsive drawer animations.

- Responsiveness: Mobile-first responsive layout (collapsible navigation, touch-friendly tap targets, single-column grid on mobile scaling to multi-column grid on desktop).

---

### USER PERMISSION & ROLE FLEXIBILITY RULES

- Job Posting: ANY registered member (both Leos and Lions) can post jobs, internship positions, freelance gigs, or startup co-founder roles. (e.g., A Leo posting a gig for their startup, a Lion posting a corporate vacancy, or a club hiring a freelance graphics designer).

- Job Applying: ALL registered members (both Leos and Lions) can search and apply for posted vacancies based on qualifications and interests.

---

### PAGES & NAVIGATION STRUCTURE

1. NAVIGATION BAR (Header)

   - Brand Logo: "LeoConnect Hub" incorporating the #1C4F9C navy and #FCCB06 gold palette accents.

   - Nav Links: Home, Opportunity Board, Profile & Activities, Talent Directory

   - Actions: "Post Opportunity" button (Open to all members) & "Sign In / Register" button.

   - Mobile: Responsive hamburger menu with Framer Motion slide-over drawer.

2. PAGE 1: HOME PAGE (Landing & Platform Overview)

   - Hero Section: High-impact headline ("Empowering Leo & Lion Talent Across Our Global Network"), sub-headline highlighting youth startup opportunities and Lion enterprise roles, animated CTA buttons ("Browse Opportunities", "Post a Vacancy"), and metric stat cards (e.g., "600+ Active Members", "180+ Opportunities Listed", "45+ Member Startups").

   - What & Why Section: Professional cards detailing the mutual value—enabling Leos to recruit fellow Leos for startups, Lions to hire verified young professionals, and members of all ages to access skill-matched roles.

   - How It Works Steps:

     1. Build Profile: Showcase professional skills alongside club leadership history.

     2. Post or Discover: Any member can list vacancies; all members can apply.

     3. Connect & Grow: Collaborate on startups, corporate roles, and freelance tasks.

   - Vision & Mission: Clean two-column grid card emphasizing career advancement, cross-generational mentorship, and economic empowerment through service.

   - Interactive FAQ Accordion: Answering questions about member registration, verified badges, startup hiring, and application processes.

   - Professional Footer: District contacts, legal/privacy links, quick links, and copyright.

3. PAGE 2: OPPORTUNITY BOARD (Jobs, Startup Hiring & Micro-Tasks)

   - Header & Search Bar: Integrated search (role/keyword), Filter by Role Type (Full-time, Startup Team, Internship, Freelance/Task), Filter by Poster Type (Leo Startup, Lion Enterprise, Club Initiative), and Location (Remote/On-site).

   - Featured Vacancy Section: Top highlighted postings (e.g., "Frontend Developer wanted for Leo-founded AI Startup", "Marketing Intern at Lion Enterprise", "UI Designer for District Event").

   - Interactive Vacancy Grid / List View: Cards displaying:

     * Job Title & Poster Info (e.g., Posted by: "Kasun D. (Leo - Tech Founder)" or "Sarah M. (Lion - Managing Director)" with verified status badges).

     * Location, Work Type tag, Compensation/Stipend details.

     * Skill Badges (#69A197 background accents).

     * "Apply Now" button opening a Framer Motion slide-out application modal with CV attachment simulation.

4. PAGE 3: PROFILE & ACTIVITIES PAGE (Showcase & Log Experience)

   - Header Section: Avatar, Full Name, Leo/Lion Club affiliation, Leadership Title (e.g., Club President, Startup Founder, IT Director), Verified Member Badge (#FCCB06 accent), and Download CV button.

   - Tab 1: "Professional & Service Portfolio" (Grid displaying past community projects led, startup initiatives, professional projects, and core technical skills).

   - Tab 2: "Log New Activity / Experience" (Clean, professional form to log new service projects, startup achievements, or work experience with fields for Project Name, Club/Company, Role, Description, Skill Tags, and Portfolio Link).

   - Tab 3: "Impact Metrics & Badges" (Visual stat blocks: Service Hours, Projects Led, Verified Skill Endorsements).

5. PAGE 4: TALENT DIRECTORY & NETWORK

   - Purpose: Allow members to discover fellow Leos and Lions by skill set for hiring, startup co-founding, or project collaboration.

   - Search & Filter Bar: Filter profiles by Skill (e.g., React, Graphic Design, Accounting, Project Management), Club/District, or Member Type (Leo / Lion / Leo-Lion).

   - Talent Cards Grid: Showing member avatar, verified badge, top skills, employment status (Open for Roles / Hiring / Open for Startup Collaboration), and "View Profile" / "Message" buttons.

---

### TECHNICAL REQUIREMENTS

- Build only the frontend code for now.

- Modular code architecture (Navbar, Footer, JobCard, CandidateCard, ActivityForm, ApplicationModal).

- High visual standards: Ensure colors #1C4F9C, #FCCB06, #BF211E, and #69A197 are used harmoniously for buttons, badges, hover states, and structural accents while maintaining accessibility and readability.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ccfdbf8c-bd7d-5289-b18b-36aa538468c9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
