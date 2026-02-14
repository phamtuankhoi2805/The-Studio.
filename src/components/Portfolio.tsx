"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';

export default function Portfolio() {
  return (
    <section className="section-padding portfolio" id="work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="overline">Dự án Tiêu biểu</span>
          <h2>Giải pháp kỹ thuật cho doanh nghiệp.</h2>
        </motion.div>

        <div className="case-studies">
          {PROJECTS.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`case-study ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="cs-content">
                <span className="cs-year">{cs.year}</span>
                <h3>{cs.title}</h3>
                <div className="cs-details">
                  <p><strong>Khách hàng:</strong> {cs.client}</p>
                  <p><strong>Thử thách:</strong> {cs.challenge}</p>
                  <p><strong>Sáng kiến:</strong> {cs.solution}</p>
                </div>
                <div className="cs-action">
                  <Button variant="outline" fullWidthOnMobile>Xem chi tiết</Button>
                </div>
              </div>
              <div className="cs-image">
                <div className="image-box" style={{ backgroundImage: `url(${cs.image})` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-header { margin-bottom: 60px; }
        h2 { font-size: 32px; max-width: 500px; color: var(--text-primary); }
        .case-studies { display: flex; flex-direction: column; gap: 80px; }
        .case-study { display: flex; align-items: center; gap: 60px; }
        .case-study.reverse { flex-direction: row-reverse; }
        .cs-content { flex: 1; display: flex; flex-direction: column; gap: 20px; }
        .cs-year { color: var(--text-tertiary); font-size: 13px; font-weight: 600; }
        h3 { font-size: 28px; letter-spacing: -0.5px; }
        .cs-details { display: flex; flex-direction: column; gap: 8px; }
        p { color: var(--text-secondary); font-size: 14px; line-height: 1.6; }
        .cs-image { flex: 1.2; }
        .image-box {
          width: 100%;
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        @media (max-width: 900px) {
          .case-studies { gap: 60px; }
          .case-study { flex-direction: column-reverse !important; gap: 32px; }
          .cs-image { width: 100%; }
          .image-box { height: 250px; }
          h3 { font-size: 24px; }
          .section-header { text-align: center; }
          h2 { margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
