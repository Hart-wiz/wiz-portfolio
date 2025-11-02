"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code2,
  Zap,
  Database,
  Cloud,
} from "lucide-react";
import Nav from "@/components/Nav";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  link: string;
  github?: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

interface Skill {
  category: string;
  proficiency: number;
  items: { name: string; level: "Expert" | "Advanced" | "Intermediate" }[];
}

const Portfolio: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Enterprise SaaS Platform",
      description: "Multi-tenant application serving 500K+ users",
      longDescription:
        "Architected and led development of a scalable SaaS platform with advanced real-time analytics, custom reporting, and API-first design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Prisma",
        "TailwindCSS",
      ],
      metrics: [
        { label: "Users", value: "500K+" },
        { label: "Uptime", value: "99.99%" },
        { label: "Response Time", value: "<100ms" },
      ],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description: "Processing 10M+ events per day with sub-second latency",
      longDescription:
        "Built high-performance data pipeline handling 10M+ events daily with real-time visualization and predictive analytics.",
      technologies: [
        "React",
        "Node.js",
        "Kafka",
        "ClickHouse",
        "WebSocket",
        "D3.js",
        "Docker",
      ],
      metrics: [
        { label: "Throughput", value: "10M/day" },
        { label: "Latency", value: "<500ms" },
        { label: "Accuracy", value: "99.9%" },
      ],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Microservices Architecture",
      description: "Complex backend system with 15+ services",
      longDescription:
        "Designed and implemented distributed microservices architecture with advanced service communication, monitoring, and deployment automation.",
      technologies: [
        "Node.js",
        "gRPC",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "ELK Stack",
        "ArgoCD",
      ],
      metrics: [
        { label: "Services", value: "15+" },
        { label: "Availability", value: "99.95%" },
        { label: "Deployment", value: "<5min" },
      ],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Mobile-First Web Application",
      description: "PWA with offline-first architecture",
      longDescription:
        "Developed progressive web application with offline capabilities, service workers, and native app-like experience across all devices.",
      technologies: [
        "React",
        "TypeScript",
        "IndexedDB",
        "Service Workers",
        "Webpack",
        "Jest",
        "Playwright",
      ],
      metrics: [
        { label: "Performance", value: "98/100" },
        { label: "Accessibility", value: "WCAG AA" },
        { label: "Bundle Size", value: "45KB" },
      ],
      link: "#",
      github: "#",
    },
  ];

  const experience: Experience[] = [
    {
      id: 1,
      role: "Senior Full-Stack Engineer",
      company: "jengatech Inc.",
      period: "2023 - Present",

      highlights: [
        "Led architecture decisions for core platform serving 500K+ monthly users",
        "Mentored team of 8 engineers on best practices and system design",
        "Owned end-to-end development of customer analytics module",
        "Reduced infrastructure costs by 40% by implementing CDN and database optimization",
        "Established CI/CD pipeline reducing deployment time from 30min to 5min",
      ],
    },

    {
      id: 2,
      role: "Full-Stack Software Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      highlights: [
        "Built and maintained scalable web platform from ground up",
        "Implemented real-time features using WebSockets and event-driven architecture",
        "Designed and optimized PostgreSQL schemas for complex queries",
        "Implemented automated performance monitoring and alerting",
      ],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2018 - 2020",
      highlights: [
        "Developed responsive interfaces for 20+ client projects",
        "Optimized bundle size and page load times",
        "Collaborated with design team to implement pixel-perfect designs",
        "Created reusable component library used across 10+ projects",
        "Mentored 2 junior developers",
      ],
    },
  ];

  const skills: Skill[] = [
    {
      category: "Frontend Development",
      proficiency: 98,
      items: [
        { name: "React / Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Tailwind CSS / SCSS", level: "Expert" },
        { name: "Performance Optimization", level: "Expert" },
        { name: "Testing (Jest, Cypress)", level: "Advanced" },
      ],
    },
    {
      category: "Backend Development",
      proficiency: 95,
      items: [
        { name: "Node.js / Express", level: "Expert" },
        { name: "PostgreSQL / MongoDB", level: "Expert" },
        { name: "System Design", level: "Advanced" },
        { name: "API Design & REST", level: "Expert" },
        { name: "caching & Optimization", level: "Advanced" },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      proficiency: 88,
      items: [
        { name: "Docker & Kubernetes", level: "Advanced" },
        { name: "AWS (EC2, S3, RDS, CloudFront)", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Advanced" },
        { name: "Monitoring & Logging", level: "Intermediate" },
      ],
    },
  ];

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Full-Stack Engineer & System Architect
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I craft scalable web applications and distributed systems.
            Specializing in high-performance backend architecture, modern
            frontend development, and cloud infrastructure. Currently building
            at TechCorp Inc.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-medium hover:border-gray-400 transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-12 flex gap-6 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">5+</span> Years
              Experience
            </div>
            <div>
              <span className="font-semibold text-gray-900">50+</span> Projects
              Delivered
            </div>
            <div>
              <span className="font-semibold text-gray-900">20M+</span> Users
              Impacted
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Frontend Architecture",
                desc: "React, Next.js, TypeScript, Performance optimization",
              },
              {
                icon: Database,
                title: "Backend Systems",
                desc: "Node.js, PostgreSQL, MongoDB, System design",
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                desc: "AWS, Docker, Kubernetes, CI/CD, Monitoring",
              },
              {
                icon: Zap,
                title: "Performance",
                desc: "Optimization, Caching, Database tuning, Scalability",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto" id="experience">
        <h2 className="text-4xl font-bold mb-16">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-blue-200 hover:border-blue-600 transition-colors last:pb-0"
            >
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white" />
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <ChevronRight
                        size={20}
                        className="text-blue-600 shrink-0 mt-0.5"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    {skill.category}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div
                    className="bg-linear-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700 text-sm">{item.name}</span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          item.level === "Expert"
                            ? "bg-green-100 text-green-700"
                            : item.level === "Advanced"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto" id="projects">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.longDescription}</p>

                {project.metrics && (
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-100">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-2xl font-bold text-blue-600">
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                      GitHub <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-20 px-4 bg-linear-to-br from-blue-600 to-cyan-600 text-white"
        id="contact"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm always interested in discussing new projects, opportunities, and
            collaborations.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:alex@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <Mail size={20} /> Send Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4 text-center text-gray-600 text-sm">
        <p>© 2024 Alex Dev. Built with Next.js, TypeScript & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Portfolio;
