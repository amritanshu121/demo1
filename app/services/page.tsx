import { FileCode, Globe, Briefcase, User } from 'lucide-react';
import styles from './services.module.css';

const services = [
  {
    icon: FileCode,
    title: 'Static Websites',
    description: 'Fast, secure, and SEO-friendly static websites perfect for portfolios, landing pages, and informational sites.',
    features: [
      'Lightning-fast loading speeds',
      'Enhanced security',
      'Easy to maintain',
      'Cost-effective hosting',
    ],
  },
  {
    icon: Globe,
    title: 'Dynamic Websites',
    description: 'Interactive and data-driven websites with custom functionality tailored to your business needs.',
    features: [
      'Real-time content updates',
      'User authentication',
      'Database integration',
      'Custom backend solutions',
    ],
  },
  {
    icon: User,
    title: 'Portfolio Websites',
    description: 'Showcase your work with a stunning portfolio that highlights your skills and attracts opportunities.',
    features: [
      'Project galleries',
      'Case study pages',
      'Contact integration',
      'Responsive design',
    ],
  },
  {
    icon: Briefcase,
    title: 'Small Business Websites',
    description: 'Professional websites designed to help small businesses establish their online presence and grow.',
    features: [
      'Business information pages',
      'Service showcases',
      'Contact forms',
      'Location maps',
    ],
  },
];

export const metadata = {
  title: 'Our Services - WebCraft Studios',
  description: 'Professional web development services including static websites, dynamic websites, portfolio websites, and small business websites.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={`${styles.title} animate-fade-in`}>Our Services</h1>
          <p className={`${styles.subtitle} animate-fade-in animation-delay-200`}>
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.title}
                className={styles.serviceCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.serviceIcon}>
                  <service.icon size={32} />
                </div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <svg
                        className={styles.checkIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
            <p className={styles.ctaDescription}>
              We're happy to discuss your specific requirements and create a tailored solution for your business.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
