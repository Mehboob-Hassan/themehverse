import React from 'react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Developed a mobile-friendly e-commerce platform with a seamless user experience.",
        challenge: "Low online sales and poor website performance.",
        solution: "Built a fast, secure platform optimized for speed and SEO.",
        impact: "Increased sales by 150% and user retention by 80%.",
        image: "/images/ecommerce.jpeg", // Local image from public/images folder
        link: "#",
    },
    {
        title: "SEO Campaign for Local Business",
        description: "Optimized the website and launched a digital marketing campaign.",
        challenge: "Low local search visibility and minimal customer engagement.",
        solution: "Implemented local SEO strategies and PPC campaigns.",
        impact: "Achieved a 200% increase in organic traffic within 3 months.",
        image: "/images/seo.webp",
        link: "#",
    },
    {
        title: "Custom Portfolio Website",
        description: "Designed a sleek portfolio for a creative agency.",
        challenge: "Outdated design with poor mobile compatibility.",
        solution: "Created a responsive, modern design showcasing their work.",
        impact: "Boosted inquiries by 120% and enhanced brand image.",
        image: "/images/portfolio-website.jpeg",
        link: "#",
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-heading">Our Work Speaks for Itself</h1>
                <p className="portfolio-subheading">
                    Here are some of the projects we’ve delivered with measurable impact and proven success.
                </p>
            </div>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="portfolio-card" key={index}>
                        <img src={project.image} alt={project.title} className="portfolio-image" />
                        <div className="portfolio-content">
                            <h2 className="portfolio-title">{project.title}</h2>
                            <p className="portfolio-description">{project.description}</p>
                            <div className="portfolio-details">
                                <p><strong>Challenge:</strong> {project.challenge}</p>
                                <p><strong>Solution:</strong> {project.solution}</p>
                                <p><strong>Impact:</strong> {project.impact}</p>
                            </div>
                            <a href={project.link} className="portfolio-link">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="see-more">
                <a href="/projects" className="see-more-link">
                    See More Projects
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
