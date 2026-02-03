import Image from 'next/image';
import { ExternalLink, Code } from 'lucide-react';
import styles from './portfolio.module.css';

const projects = [
  {
    title: ' Dynamic Hospital Website',
    category: 'Management & Apppointment System',
    description:
      'Developed and deployed a fully dynamic hospital website with admin-controlled content management.Enabled real-time updates for health packages, doctors’ page, and other sections.Responsible for end-to-end development including frontend, backend, database integration, and cloud deployment.',
    // technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    image: '/apexi.png',
    demoLink: 'https://apexhospitalsolapur.com',
  },
  {
    title: 'Cooperative Bank Website',
    category: 'Informational Website',
    description:
      'Developed a responsive informative cooperative bank website using Next.js, enhancing performance and UI/UX, and implemented backend features like enquiry forms with email notifications via Node.js and Express, boosting user engagement and enquiry submissions.',
    // technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/rameshwar.png',
    demoLink: 'https://rameshwarbank.com',
  },
  {
    title: 'Business Landing Page',
    category: 'Small Business Website',
    description:
      'Clean and professional landing page for a local business with contact forms and service listings.',
    // technologies: ['React', 'TypeScript', 'CSS Modules'],
    image: '/projects/business.jpg',
    demoLink: 'https://example.com/business',
  },
  {
    title: 'SaaS Application',
    category: 'Dynamic Website',
    description:
      'Software-as-a-Service platform with subscription management and real-time analytics.',
    // technologies: ['Next.js', 'Supabase', 'Stripe', 'React'],
    image: '/projects/saas.jpg',
    demoLink: 'https://example.com/saas',
  },
];

export const metadata = {
  title: 'Portfolio - WebCraft Studios',
  description:
    'Explore our portfolio of web development projects including e-commerce platforms, portfolio websites, and business websites.',
};

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={`${styles.title} animate-fade-in`}>Our Work</h1>
          <p className={`${styles.subtitle} animate-fade-in animation-delay-200`}>
            A showcase of projects we've built for our clients
          </p>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={styles.projectCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.projectImage}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={styles.projectImg}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>
                      <Code size={48} />
                    </div>
                  )}
                </div>

                <div className={styles.projectContent}>
                  <span className={styles.category}>{project.category}</span>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  {/* <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div> */}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoLink}
                    >
                      View Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
            <p className={styles.ctaDescription}>
              Let's work together to create something amazing. Get in touch to
              discuss your project.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Start Your Project
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
