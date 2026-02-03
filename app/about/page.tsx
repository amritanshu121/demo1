import { Target, Users, Code2, Award } from 'lucide-react';
import styles from './about.module.css';

const team = [
  {
    name: 'Amritanshu Yadav',
    role: 'Web Developer / Frontend Engineer',
    description: 'Passionate about creating beautiful, user-friendly interfaces with modern technologies.',
    initials: 'AY',
  },
  {
    name: 'Abhishek Gupta',
    role: 'Web Developer / Backend Engineer',
    description: 'Focused on building robust, scalable backend solutions and system architecture.',
    initials: 'AG',
  },
];

const techStack = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
];

export const metadata = {
  title: 'About Us - WebCraft Studios',
  description: 'Learn about WebCraft Studios, our mission, and the team behind our professional web development services.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={`${styles.title} animate-fade-in`}>About Us</h1>
          <p className={`${styles.subtitle} animate-fade-in animation-delay-200`}>
            Building digital solutions that make a difference
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <p className={styles.paragraph}>
              We are a dedicated team of web developers passionate about creating modern,
              high-performance websites that help businesses succeed online. With a focus on
              clean code, exceptional user experience, and cutting-edge technologies, we deliver
              solutions that not only look great but perform exceptionally.
            </p>
            <p className={styles.paragraph}>
              Our approach combines technical expertise with creative problem-solving to build
              websites that are fast, secure, and scalable. We work closely with our clients
              to understand their vision and bring it to life with precision and care.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What We Help</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Users size={28} />
              </div>
              <h3 className={styles.valueTitle}>Startups</h3>
              <p className={styles.valueDescription}>
                Launch your startup with a professional web presence that attracts investors and customers.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Target size={28} />
              </div>
              <h3 className={styles.valueTitle}>Small Businesses</h3>
              <p className={styles.valueDescription}>
                Grow your business with a website that showcases your services and drives conversions.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Award size={28} />
              </div>
              <h3 className={styles.valueTitle}>Personal Brands</h3>
              <p className={styles.valueDescription}>
                Stand out with a portfolio that highlights your skills and attracts opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whatMakesUsDifferent}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Makes Us Different</h2>
          <div className={styles.differenceGrid}>
            <div className={styles.differenceItem}>
              <h3 className={styles.differenceTitle}>Performance First</h3>
              <p className={styles.differenceDescription}>
                Lightning-fast loading times and optimized performance across all devices.
              </p>
            </div>
            <div className={styles.differenceItem}>
              <h3 className={styles.differenceTitle}>Mobile-First Design</h3>
              <p className={styles.differenceDescription}>
                Responsive designs that look and work beautifully on smartphones, tablets, and desktops.
              </p>
            </div>
            <div className={styles.differenceItem}>
              <h3 className={styles.differenceTitle}>Clean Code</h3>
              <p className={styles.differenceDescription}>
                Maintainable, well-documented code following industry best practices and standards.
              </p>
            </div>
            <div className={styles.differenceItem}>
              <h3 className={styles.differenceTitle}>Affordable Pricing</h3>
              <p className={styles.differenceDescription}>
                Transparent, competitive pricing that delivers exceptional value for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tech}>
        <div className={styles.container}>
          <div className={styles.techContent}>
            <Code2 className={styles.techIcon} size={48} />
            <h2 className={styles.sectionTitle}>Our Tech Stack</h2>
            <p className={styles.techDescription}>
              We use modern, proven technologies to build fast, secure, and scalable websites.
            </p>
            <div className={styles.techStack}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Meet the Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.avatar}>
                  <span className={styles.initials}>{member.initials}</span>
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionCard}>
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionText}>
              To empower businesses and individuals with exceptional web solutions that drive
              growth, enhance user experience, and make a lasting impact in the digital world.
              We believe in building long-term partnerships based on trust, quality, and mutual success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
