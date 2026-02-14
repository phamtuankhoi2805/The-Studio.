"use client";

import Button from './Button';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="hero">
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="container hero-content"
      >
        <div className="hero-text-stack">
          <motion.h1 variants={itemVars}>
            Xây dựng Hạ tầng Số <br className="desktop-only" /> cho Doanh nghiệp Hiện đại.
          </motion.h1>
          <motion.p variants={itemVars} className="subtitle">
            Tôi giúp các doanh nghiệp tối ưu hóa vận hành và mở rộng quy mô thông qua giải pháp
            phần mềm tùy chỉnh và tài sản mã nguồn cao cấp.
          </motion.p>
          <motion.div variants={itemVars} className="cta-group">
            <Button size="lg" fullWidthOnMobile>Xem dự án tiêu biểu</Button>
            <Button variant="outline" size="lg" fullWidthOnMobile>Khám phá Cửa hàng</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="hero-image-container"
        >
          <div className="image-placeholder">
            <div className="image-overlay"></div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .hero {
          padding: 80px 0 60px;
          background-color: var(--bg-primary);
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 48px;
        }
        .hero-text-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          max-width: 900px;
        }
        h1 {
          font-size: 56px;
          color: var(--text-primary);
          letter-spacing: -1.5px;
          line-height: 1.1;
        }
        .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
        }
        .cta-group {
          display: flex;
          gap: 16px;
          margin-top: 8px;
          width: 100%;
          justify-content: center;
        }
        .hero-image-container {
          width: 100%;
          max-width: 1000px;
          height: 500px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
        }
        .image-placeholder {
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(44, 44, 44, 0.02);
        }

        @media (max-width: 768px) {
          .hero { padding: 60px 0 40px; }
          h1 { font-size: 36px; letter-spacing: -0.8px; }
          .subtitle { font-size: 15px; }
          .cta-group { flex-direction: column; align-items: stretch; padding: 0 20px; }
          .hero-image-container { height: 280px; }
          .desktop-only { display: none; }
        }
      `}</style>
    </section>
  );
}
