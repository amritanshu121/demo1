'use client';

import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9372513895', '_blank');
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={`${styles.title} animate-fade-in`}>Get In Touch</h1>
          <p className={`${styles.subtitle} animate-fade-in animation-delay-200`}>
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p className={styles.infoDescription}>
                Reach out to us directly through any of the following channels. We typically respond within 24 hours.
              </p>

              <div className={styles.contactMethods}>
                <a href="mailto:info@webcraftstudios.com" className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <Mail size={24} />
                  </div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>Email</h3>
                    <p className={styles.methodValue}>info@webcraftstudios.com</p>
                  </div>
                </a>

                <a href="tel: 9372513895" className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <Phone size={24} />
                  </div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>Phone</h3>
                    <p className={styles.methodValue}>+91 93725 13895</p>
                    <p className={styles.methodValue}>+91 99870 50067</p>
                  </div>
                </a>

                <button onClick={handleWhatsAppClick} className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <MessageCircle size={24} />
                  </div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>WhatsApp</h3>
                    <p className={styles.methodValue}>Chat with us</p>
                  </div>
                </button>
              </div>

              <div className={styles.additionalInfo}>
                <div className={styles.infoItem}>
                  <MapPin size={20} />
                  <span>Available for remote projects worldwide</span>
                </div>
                <div className={styles.infoItem}>
                  <Clock size={20} />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className={styles.whatsappSection}>
              <div className={styles.whatsappCard}>
                <div className={styles.whatsappIcon}>
                  <MessageCircle size={48} />
                </div>
                <h3 className={styles.whatsappTitle}>Prefer Instant Messaging?</h3>
                <p className={styles.whatsappDescription}>
                  Connect with us on WhatsApp for quick responses and real-time communication about your project.
                </p>
                <button onClick={handleWhatsAppClick} className={styles.whatsappButton}>
                  <MessageCircle size={20} />
                  Open WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Happens Next?</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Reach Out</h3>
              <p className={styles.stepDescription}>
                Contact us through your preferred method with details about your project.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Consultation</h3>
              <p className={styles.stepDescription}>
                We'll schedule a call to discuss your requirements and vision in detail.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Proposal</h3>
              <p className={styles.stepDescription}>
                Receive a detailed proposal with timeline and transparent pricing.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Development</h3>
              <p className={styles.stepDescription}>
                We start building your website with regular updates and feedback loops.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
