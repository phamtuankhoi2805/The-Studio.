"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from '@/lib/data';

export default function Portfolio() {
  const revealVars: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="section-padding portfolio" id="work">
      <div className="container">
        <motion.div
          variants={revealVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <span className="overline">Dự án Tiêu biểu</span>
          <h2>Giải pháp kỹ thuật chuyên nghiệp cho các bài toán kinh doanh.</h2>
        </motion.div>

        <div className="case-studies">
          {PROJECTS.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`case-study ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="cs-content">
                <span className="cs-year">{cs.year}</span>
                <h3>{cs.title}</h3>
                <div className="cs-meta">
                  <span><strong>Khách hàng:</strong> {cs.client}</span>
                  <span><strong>Vai trò:</strong> {cs.role}</span>
                </div>
                <div className="cs-details">
                  <p><strong>Thử thách:</strong> {cs.challenge}</p>
                  <p><strong>Giải pháp:</strong> {cs.solution}</p>
                  <p><strong>Kết quả:</strong> {cs.outcome}</p>
                </div>
                <div className="cs-action">
                  <Button variant="outline">Xem chi tiết Dự án</Button>
                </div>
              </div>
              <div className="cs-image">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="image-box"
                  style={{ backgroundImage: `url(${cs.image})` }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        h2 {
          font-size: 36px;
          max-width: 600px;
          color: var(--text-primary);
        }
        .case-studies {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }
        .case-study {
          display: flex;
          align-items: center;
          gap: 100px;
        }
        .case-study.reverse {
          flex-direction: row-reverse;
        }
        .cs-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .cs-year {
          color: var(--text-tertiary);
          font-size: 14px;
          font-weight: 500;
        }
        h3 {
          font-size: 32px;
          letter-spacing: -0.5px;
        }
        .cs-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 14px;
          color: var(--text-secondary);
        }
        .cs-meta strong {
          color: var(--text-primary);
        }
        .cs-details {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        p {
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.7;
        }
        .cs-action {
          margin-top: 12px;
        }
        .cs-image {
          flex: 1.5;
        }
        .image-box {
          width: 100%;
          height: 500px;
          background-size: cover;
          background-position: center;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
        }

        @media (max-width: 1024px) {
          .case-study {
            flex-direction: column !important;
            gap: 48px;
          }
          .cs-image {
            width: 100%;
          }
          .image-box {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
