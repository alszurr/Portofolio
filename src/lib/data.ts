export const profile = {
  name: "Alif Pratama Soekarno Putra",
  firstName: "Alif",
  role: "TJKT Student",
  headline: "TJKT Student · Network & Systems Enthusiast",
  school: "SMK PGRI 1 Tangerang",
  schoolUrl:
    "https://www.google.com/maps/search/?api=1&query=SMK+PGRI+1+Tangerang",
  program: "Teknik Jaringan Komputer dan Telekomunikasi (TJKT)",
  location: "Tangerang, Indonesia",
  bio: "Vocational student at SMK PGRI 1 Tangerang studying Computer and Network Engineering. I spend my time configuring MikroTik routers, setting up Linux servers, and learning how real networks stay up, secure, and fast.",
  email: "lifftamaa@gmail.com",

  socials: {
    github: "https://github.com/alszurr",
    linkedin: "https://www.linkedin.com/in/your-username",
    instagram: "https://www.instagram.com/alfprtma_sk",
  },

  resumeUrl: "#",
} as const;

export const roles = [
  "TJKT Student",
  "Network Enthusiast",
  "Linux User",
  "Aspiring SysAdmin",
] as const;

export const skills = [
  {
    name: "MikroTik",
    icon: "Router",
    description:
      "RouterOS configuration, VLANs, and basic firewall rules for small networks.",
  },
  {
    name: "Basic Programming",
    icon: "Code2",
    description:
      "Fundamentals of programming: logic, loops, functions, and structured thinking.",
  },
  {
    name: "Technology Knowledge",
    icon: "Cpu",
    description:
      "Solid grasp of how computers, hardware, and modern tech actually work.",
  },
  {
    name: "SysAdmin",
    icon: "ServerCog",
    description:
      "System administration basics: users, services, permissions, and uptime.",
  },
  {
    name: "Linux",
    icon: "SquareTerminal",
    description:
      "Comfortable on the command line, shell scripting, and package management.",
  },
] as const;

export const education = {
  school: "SMK PGRI 1 Tangerang",
  schoolUrl:
    "https://www.google.com/maps/search/?api=1&query=SMK+PGRI+1+Tangerang",
  program: "Teknik Jaringan Komputer dan Telekomunikasi (TJKT)",
  years: "2024 — 2027",
  description:
    "A three-year vocational program covering computer and network fundamentals: networking basics, computer systems, hardware maintenance, and hands-on lab work with routers and servers.",
} as const;

export const projects = [
  {
    title: "Home Lab Network Setup",
    description:
      "A small home network built with a MikroTik router, wired and wireless clients, and basic traffic segmentation.",
    tags: ["MikroTik", "Network"],
  },
  {
    title: "MikroTik Router & Firewall Configuration",
    description:
      "RouterOS configuration exercise covering NAT, DHCP, and firewall rules to secure a LAN.",
    tags: ["MikroTik", "Firewall"],
  },
  {
    title: "Linux Server Deployment",
    description:
      "A Linux server set up and administered over SSH with user accounts, services, and basic monitoring.",
    tags: ["Linux", "SysAdmin"],
  },
] as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export const siteMeta = {
  title: "Alif Pratama Soekarno Putra — TJKT Student",
  description:
    "Portfolio of Alif Pratama Soekarno Putra, a TJKT (Computer & Network Engineering) student at SMK PGRI 1 Tangerang. Skills in MikroTik, Linux, and system administration.",
} as const;