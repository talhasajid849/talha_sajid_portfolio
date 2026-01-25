import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightRays from './LightRays'; // Import the LightRays component
import {
    FiCode,
    FiExternalLink,
    FiGithub,
    FiCalendar,
    FiUser,
    FiTrendingUp,
    FiDatabase,
    FiCpu,
    FiLayers,
    FiZap,
    FiShield,
    FiActivity
} from 'react-icons/fi';

// 🎯 PROJECT DATA CONFIGURATION
const projectsData = [
    {
        id: 1,
        title: "Mobile Bio Lab Web Application",
        category: "Full Stack Development",
        period: "May 2025 - Aug 2024",
        status: "Completed",
        type: "Production-Ready",
        description: "An enterprise-grade lab management system with role-based authentication and real-time equipment tracking[cite: 12, 13].",
        longDescription: "Developed a robust system featuring Admin, Lab Technician, and Patient roles[cite: 13]. It includes a real-time reservation system utilizing QR codes and BLE data capture for precise equipment tracking, along with automated PDF report generation[cite: 14, 15].",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "Redis", "Chart.js"],
        skills: [
            { name: "Next.js", level: 95 },
            { name: "Database Design", level: 90 },
            { name: "Caching (Redis)", level: 85 },
            { name: "System Architecture", level: 88 }
        ],
        achievements: [
            "Implemented role-based access control (RBAC) [cite: 13]",
            "Integrated QR code and BLE data capture [cite: 14]",
            "Built interactive dashboards with Chart.js [cite: 15]",
            "Optimized performance using Redis caching [cite: 16]"
        ],
        links: {
            github: "https://github.com/talhasajid849",
            demo: "https://github.com/talhasajid849",
            documentation: "https://github.com/talhasajid849"
        },
        color: "#3b82f6", 
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        title: "Multi-Vendor E-Commerce Marketplace",
        category: "MERN Stack Development",
        period: "Sep 2025 - Dec 2025",
        status: "Completed",
        type: "Personal Project",
        description: "A full-featured marketplace supporting multiple vendors with real-time communication features[cite: 17, 18].",
        longDescription: "Designed a scalable marketplace that enables multiple vendors to manage accounts and products[cite: 18]. Integrated a real-time chat system using Socket.io to facilitate direct vendor-customer communication and a secure payment gateway[cite: 19, 21].",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT"],
        skills: [
            { name: "React.js", level: 92 },
            { name: "WebSockets", level: 85 },
            { name: "API Security", level: 90 },
            { name: "State Management", level: 88 }
        ],
        achievements: [
            "Integrated real-time chat with Socket.io [cite: 19]",
            "Built comprehensive order management system [cite: 20]",
            "Implemented secure payment gateway integration [cite: 21]",
            "Developed automated email notification system [cite: 20]"
        ],
        links: {
            github: "https://github.com/talhasajid849",
            demo: null, // Available upon request per CV
            documentation: "https://github.com/talhasajid849"
        },
        color: "#10b981",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        id: 3,
        title: "Learning Management System (LMS)",
        category: "Full Stack Development",
        period: "Dec 2025 - Present",
        status: "In Progress",
        type: "Web Application",
        description: "A comprehensive LMS with course creation, enrollment, and video content delivery[cite: 29, 30].",
        longDescription: "Currently building a type-safe LMS using TypeScript to ensure maintainability[cite: 32]. The platform features role-based dashboards for instructors and students, allowing for enrollment tracking and progress monitoring[cite: 30, 31].",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
        skills: [
            { name: "TypeScript", level: 90 },
            { name: "Next.js 14", level: 92 },
            { name: "UI/UX Design", level: 85 },
            { name: "Product Management", level: 80 }
        ],
        achievements: [
            "Utilizing TypeScript for full-stack type safety [cite: 32]",
            "Developing complex role-based dashboards [cite: 31]",
            "Implementing video content streaming",
            "Designing scalable course enrollment logic [cite: 30]"
        ],
        links: {
            github: "https://github.com/talhasajid849",
            demo: null,
            documentation: "https://github.com/talhasajid849"
        },
        color: "#f59e0b",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        id: 4,
        title: "Real Estate Property Platform",
        category: "MERN Stack Development",
        period: "2023",
        status: "Completed",
        type: "Web Application",
        description: "A property listing platform featuring advanced filtering and optimized media delivery[cite: 23, 25].",
        longDescription: "Created a responsive real estate application that uses Cloudinary for multi-image uploads and optimized media delivery[cite: 26, 28]. It features a robust search system and secure JWT-based authentication[cite: 25, 27].",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary", "Tailwind CSS"],
        skills: [
            { name: "Cloudinary", level: 88 },
            { name: "Tailwind CSS", level: 95 },
            { name: "JWT Auth", level: 90 },
            { name: "Media Optimization", level: 85 }
        ],
        achievements: [
            "Implemented multi-image upload system [cite: 26]",
            "Developed advanced search and filter capabilities [cite: 25]",
            "Designed 100% responsive mobile-first UI [cite: 28]",
            "Secured application with JWT and Bcrypt [cite: 27, 51]"
        ],
        links: {
            github: "https://github.com/talhasajid849",
            demo: "https://github.com/talhasajid849",
            documentation: "https://github.com/talhasajid849"
        },
        color: "#ef4444",
        gradient: "from-red-500 to-rose-600"
    }
];
const ProjectsSection = () => {
    const [activeProject, setActiveProject] = useState(projectsData[0]);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive design
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Load fonts to match other sections
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const style = document.createElement('style');
        style.textContent = `
      @font-face {
        font-family: 'SF Pro Display';
        src: url('fonts/SF-Pro-Display-Medium.otf') format('opentype');
        font-weight: 500;
        font-display: swap;
      }
    `;
        document.head.appendChild(style);
    }, []);

    // Status badge component
    const StatusBadge = ({ status, type }) => {
        const getStatusColor = () => {
            switch (status) {
                case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
                case 'In Progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
                default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
            }
        };

        const getTypeIcon = () => {
            switch (type) {
                case 'Academic': return '🎓';
                case 'Professional': return '💼';
                default: return '📋';
            }
        };

        return (
            <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
                    {status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
                    {getTypeIcon()} {type}
                </span>
            </div>
        );
    };

    // Skill bar component
    const SkillBar = ({ skill }) => (
        <div className="mb-3">
            <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-white/80 font-medium">{skill.name}</span>
                <span className="text-white/60">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: activeProject.color }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                />
            </div>
        </div>
    );

    // Project navigation item
    const ProjectNavItem = ({ project, isActive, onClick }) => (
        <motion.div
            className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border ${isActive
                ? 'bg-white/10 border-white/20 shadow-lg'
                : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15'
                }`}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-center gap-3 mb-2">
                <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: project.color }}
                />
                <h3 className="font-semibold text-white text-sm md:text-base">
                    {project.title}
                </h3>
            </div>
            <p className="text-white/60 text-xs md:text-sm mb-2">{project.category}</p>
            <p className="text-white/50 text-xs">{project.period}</p>
        </motion.div>
    );

    return (
        <section
            id="projects"
            className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
            style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
            {/* Light Rays Background - Positioned behind everything */}
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="right"
                    raysColor="#f0abfc" // Purple color matching your theme
                    raysSpeed={1.0} // Slower, more elegant speed
                    lightSpread={1.5} // Wide spread for subtle effect
                    rayLength={1.8} // Extended length
                    pulsating={false} // No pulsating for professional look
                    fadeDistance={1.5} // Smooth fade
                    saturation={0.8} // Slightly desaturated
                    followMouse={true} // Interactive mouse following
                    mouseInfluence={0.15} // Subtle mouse influence
                    noiseAmount={0.08} // Very light noise for texture
                    distortion={0.03} // Minimal distortion
                    className="custom-rays" // Low opacity to not overpower content
                />
            </div>

            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="left"
                    raysColor="#fb923c" // Purple color matching your theme
                    raysSpeed={1.0} // Slower, more elegant speed
                    lightSpread={1.5} // Wide spread for subtle effect
                    rayLength={1.5} // Extended length
                    pulsating={false} // No pulsating for professional look
                    fadeDistance={1.5} // Smooth fade
                    saturation={0.5} // Slightly desaturated
                    followMouse={true} // Interactive mouse following
                    mouseInfluence={0.15} // Subtle mouse influence
                    noiseAmount={0.08} // Very light noise for texture
                    distortion={0.03} // Minimal distortion
                    className="custom-rays" // Low opacity to not overpower content
                />
            </div>

            {/* Enhanced Background Overlay */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                {/* Gradient continuation from skills section */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />

                {/* Enhanced tech grid pattern */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: [0.02, 0.06, 0.02] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)
            `,
                        backgroundSize: '120px 120px'
                    }}
                />

                {/* Dynamic color-changing particles */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeProject.color }}
                    animate={{
                        x: [0, 120, -60, 0],
                        y: [0, -100, 80, 0],
                        opacity: [0, 0.4, 0.2, 0],
                        scale: [0.5, 1.2, 0.8, 0.5],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: activeProject.color, opacity: 0.3 }}
                    animate={{
                        x: [0, -100, 60, 0],
                        y: [0, 60, -40, 0],
                        opacity: [0, 0.6, 0.1, 0],
                        scale: [0.3, 1, 0.6, 0.3],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 8 }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#10b981', opacity: 0.25 }}
                    animate={{
                        x: [0, 80, -120, 0],
                        y: [0, -70, 40, 0],
                        opacity: [0, 0.5, 0.15, 0],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 15 }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Featured{' '}
                        <motion.span
                            className="bg-gradient-to-r from-purple-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            style={{
                                backgroundSize: '200% 100%'
                            }}
                        >
                            Projects
                        </motion.span>
                    </h2>
                    <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
                        A showcase of my development journey from academic projects to professional implementations
                    </p>
                </motion.div>

                {/* Main Content Container */}
                <div className="max-w-7xl mx-auto">
                    {isMobile ? (
                        // Mobile: Stacked Layout
                        <div className="space-y-8">
                            {/* Mobile Project Selector */}
                            <div className="space-y-4">
                                {projectsData.map((project) => (
                                    <ProjectNavItem
                                        key={project.id}
                                        project={project}
                                        isActive={activeProject.id === project.id}
                                        onClick={() => setActiveProject(project)}
                                    />
                                ))}
                            </div>

                            {/* Mobile Project Details */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm"
                                >
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: activeProject.color }}
                                            />
                                            <h3 className="text-2xl font-bold text-white">
                                                {activeProject.title}
                                            </h3>
                                        </div>
                                        <StatusBadge status={activeProject.status} type={activeProject.type} />
                                    </div>

                                    <p className="text-white/80 leading-relaxed mb-6">
                                        {activeProject.longDescription}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                                            <FiCode className="text-lg" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                            <FiTrendingUp className="text-lg" />
                                            Skills Developed
                                        </h4>
                                        {activeProject.skills.map((skill, index) => (
                                            <SkillBar key={index} skill={skill} />
                                        ))}
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-white/90 font-semibold mb-3 flex items-center gap-2">
                                            <FiActivity className="text-lg" />
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {activeProject.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start gap-2 text-white/80">
                                                    <div
                                                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                        style={{ backgroundColor: activeProject.color }}
                                                    />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3">
                                        {activeProject.links.github && (
                                            <a
                                                href={activeProject.links.github}
                                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20"
                                            >
                                                <FiGithub />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        {activeProject.links.demo && (
                                            <a
                                                href={activeProject.links.demo}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-white border-2"
                                                style={{
                                                    backgroundColor: `${activeProject.color}20`,
                                                    borderColor: activeProject.color,
                                                    color: activeProject.color
                                                }}
                                            >
                                                <FiExternalLink />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ) : (
                        // Desktop: Split Screen Layout
                        <div className="grid grid-cols-12 gap-8 min-h-[600px]">
                            {/* Left Panel - Project Navigation */}
                            <div className="col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="sticky top-8"
                                >
                                    <h3 className="text-xl font-semibold text-white/90 mb-6 flex items-center gap-2">
                                        <FiLayers />
                                        Project Archive
                                    </h3>
                                    <div className="space-y-4">
                                        {projectsData.map((project) => (
                                            <ProjectNavItem
                                                key={project.id}
                                                project={project}
                                                isActive={activeProject.id === project.id}
                                                onClick={() => setActiveProject(project)}
                                            />
                                        ))}
                                    </div>

                                    {/* Add New Project Placeholder */}
                                    <motion.div
                                        className="mt-6 p-4 border-2 border-dashed border-white/20 rounded-lg text-center cursor-pointer hover:border-white/30 transition-colors duration-200"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="text-white/50 text-sm">
                                            <FiZap className="mx-auto mb-2" />
                                            More projects coming soon...
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right Panel - Project Details */}
                            <div className="col-span-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeProject.id}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm"
                                    >
                                        {/* Project Header */}
                                        <div className="mb-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-5 h-5 rounded-full"
                                                    style={{ backgroundColor: activeProject.color }}
                                                />
                                                <h3 className="text-3xl font-bold text-white">
                                                    {activeProject.title}
                                                </h3>
                                            </div>
                                            <StatusBadge status={activeProject.status} type={activeProject.type} />
                                            <div className="flex items-center gap-4 text-white/60 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FiCalendar />
                                                    {activeProject.period}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FiUser />
                                                    {activeProject.category}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Description */}
                                        <div className="mb-8">
                                            <p className="text-white/80 leading-relaxed text-lg">
                                                {activeProject.longDescription}
                                            </p>
                                        </div>

                                        {/* Two Column Layout for Details */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {/* Left Column */}
                                            <div className="space-y-6">
                                                {/* Technologies */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiCode className="text-lg" />
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {activeProject.technologies.map((tech, index) => (
                                                            <motion.span
                                                                key={index}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="px-3 py-2 bg-white/10 rounded-lg text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiActivity className="text-lg" />
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {activeProject.achievements.map((achievement, index) => (
                                                            <motion.li
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="flex items-start gap-3 text-white/80"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                                    style={{ backgroundColor: activeProject.color }}
                                                                />
                                                                {achievement}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div>
                                                {/* Skills Developed */}
                                                <div>
                                                    <h4 className="text-white/90 font-semibold mb-4 flex items-center gap-2">
                                                        <FiTrendingUp className="text-lg" />
                                                        Skills Developed
                                                    </h4>
                                                    <div className="space-y-4">
                                                        {activeProject.skills.map((skill, index) => (
                                                            <SkillBar key={index} skill={skill} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <div className="flex flex-wrap gap-4">
                                                {activeProject.links.github && (
                                                    <motion.a
                                                        href={activeProject.links.github}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white/80 hover:text-white border border-white/20"
                                                    >
                                                        <FiGithub />
                                                        <span>Source Code</span>
                                                    </motion.a>
                                                )}
                                                {activeProject.links.demo && (
                                                    <motion.a
                                                        href={activeProject.links.demo}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200 text-white border-2"
                                                        style={{
                                                            backgroundColor: `${activeProject.color}20`,
                                                            borderColor: activeProject.color,
                                                            color: activeProject.color
                                                        }}
                                                    >
                                                        <FiExternalLink />
                                                        <span>Live Demo</span>
                                                    </motion.a>
                                                )}
                                                {activeProject.links.documentation && (
                                                    <motion.a
                                                        href={activeProject.links.documentation}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white/60 hover:text-white/80 border border-white/10"
                                                    >
                                                        <FiShield />
                                                        <span>Documentation</span>
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;