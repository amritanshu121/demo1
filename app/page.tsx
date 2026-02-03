import Link from 'next/link';
import { ArrowRight, Zap, Shield, Smartphone, Code } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} animate-fade-in`}>
              We Build Fast, Modern & Scalable Websites
            </h1>
            <p className={`${styles.heroDescription} animate-fade-in animation-delay-200`}>
              Professional web development services for startups and small businesses.
              Transform your vision into a stunning digital experience.
            </p>
            <div className={`${styles.heroButtons} animate-fade-in animation-delay-400`}>
              <Link href="/contact" className={styles.primaryButton}>
                Contact Us
                <ArrowRight size={20} />
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Zap size={28} />
              </div>
              <h3 className={styles.featureTitle}>Lightning Fast</h3>
              <p className={styles.featureDescription}>
                Optimized for speed with modern web technologies and best practices.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Smartphone size={28} />
              </div>
              <h3 className={styles.featureTitle}>Mobile First</h3>
              <p className={styles.featureDescription}>
                Perfectly responsive designs that work flawlessly on all devices.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Shield size={28} />
              </div>
              <h3 className={styles.featureTitle}>Secure & Reliable</h3>
              <p className={styles.featureDescription}>
                Built with security in mind, ensuring your website is safe and dependable.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Code size={28} />
              </div>
              <h3 className={styles.featureTitle}>Clean Code</h3>
              <p className={styles.featureDescription}>
                Maintainable, scalable code following industry standards and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
            <p className={styles.ctaDescription}>
              Let's bring your ideas to life with a modern, professional website.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Get In Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
