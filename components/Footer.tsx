import Link from 'next/link';
import { Code2, Mail, Phone, Linkedin, Github } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <Code2 className={styles.logoIcon} />
              <span className={styles.logoText}>WebMakers</span>
            </div>
            <p className={styles.description}>
              {/* Building fast, modern, and scalable websites for startups and small businesses. */}
              Websites made Simple.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
              <li><Link href="/about" className={styles.link}>About</Link></li>
              <li><Link href="/portfolio" className={styles.link}>Portfolio</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.links}>
              <li><span className={styles.link}>Static Websites</span></li>
              <li><span className={styles.link}>Dynamic Websites</span></li>
              <li><span className={styles.link}>Portfolio Websites</span></li>
              <li><span className={styles.link}>Business Websites</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Mail size={18} />
                <a href="mailto:info@webcraftstudios.com" className={styles.link}>
                  info@webcraftstudios.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} />
                <a href="tel:9372513895" className={styles.link}>
                  +91 9372513895
                </a>
                
                <a href="tel:9987050067" className={styles.link}>
                  +91 9987050067
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} WebMakers. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
