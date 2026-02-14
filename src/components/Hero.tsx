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
            Xây dựng Hạ tầng Số <br /> cho Doanh nghiệp Hiện đại.
          </motion.h1>
          <motion.p variants={itemVars} className="subtitle">
            Tôi giúp các doanh nghiệp tối ưu hóa vận hành và mở rộng quy mô thông qua giải pháp
            phần mềm tùy chỉnh và tài sản mã nguồn cao cấp. Chú trọng vào sự hoàn hảo của kiến trúc và hiệu suất.
          </motion.p>
          <motion.div variants={itemVars} className="cta-group">
            <Button size="lg">Xem dự án tiêu biểu</Button>
            <Button variant="outline" size="lg">Khám phá Cửa hàng</Button>
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
          padding: 120px 0 80px;
          background-color: var(--bg-primary);
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 64px;
        }
        .hero-text-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          max-width: 900px;
        }
        h1 {
          font-size: 64px;
          color: var(--text-primary);
          letter-spacing: -1.5px;
        }
        .subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 640px;
          line-height: 1.7;
        }
        .cta-group {
          display: flex;
          gap: 20px;
          margin-top: 16px;
        }
        .hero-image-container {
          width: 100%;
          max-width: 1100px;
          height: 600px;
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
          h1 {
            font-size: 44px;
          }
          .hero-image-container {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
