"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Digital Assets Section */}
      <section className="section-padding digital-assets">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <span className="overline">Thư viện Tài sản Số</span>
            <h2>Mã nguồn cao cấp, được chế tác tỉ mỉ để tiết kiệm thời gian phát triển của bạn.</h2>
          </motion.div>

          <div className="product-grid">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="product-card"
              >
                <div className="card-image-box">
                  <div className="card-image" style={{ backgroundImage: `url(${product.image})` }}></div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="category">{product.category}</span>
                    <span className="price">Từ ${product.basePrice}</span>
                  </div>
                  <h3>{product.title}</h3>
                  <p className="description">{product.description}</p>

                  <div className="tech-stack">
                    {product.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <Link href={`/marketplace/${product.slug}`} style={{ flex: 1 }}>
                      <Button variant="outline" fullWidth>Xem chi tiết</Button>
                    </Link>
                    <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                      <Button variant="secondary" fullWidth className="demo-btn">Trải nghiệm Demo</Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="view-all"
          >
            <Link href="/marketplace">
              <Button size="lg">Khám phá toàn bộ Thư viện</Button>
            </Link>
          </motion.div>
        </div>

        <style jsx>{`
          .digital-assets {
            background-color: var(--bg-secondary);
          }
          .section-header {
            margin-bottom: 64px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          h2 {
            font-size: 32px;
            max-width: 500px;
          }
          .product-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }
          .product-card {
            background-color: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .card-image-box {
            overflow: hidden;
            height: 320px;
          }
          .card-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.6s ease;
          }
          .product-card:hover .card-image {
            transform: scale(1.05);
          }
          .card-content {
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            flex-grow: 1;
          }
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .category {
            font-size: 11px;
            font-weight: 600;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .price {
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
          }
          h3 {
            font-size: 26px;
            letter-spacing: -0.5px;
          }
          .description {
            font-size: 14px;
            color: var(--text-secondary);
            height: 48px;
            overflow: hidden;
            line-height: 1.6;
          }
          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 8px 0;
          }
          .tech-tag {
            font-size: 11px;
            background-color: #F0F0F0; /* Monochrome/Grayscale badges */
            padding: 4px 10px;
            border-radius: var(--radius-sm);
            color: #666;
            font-weight: 500;
          }
          .card-footer {
            margin-top: auto;
            display: flex;
            gap: 12px;
            padding-top: 16px;
          }
          .view-all {
            display: flex;
            justify-content: center;
            margin-top: 64px;
          }

          @media (max-width: 768px) {
            .product-grid {
              grid-template-columns: 1fr;
            }
            .card-footer {
                flex-direction: column;
            }
          }
        `}</style>
      </section>

      <Portfolio />

      {/* Service Packages Placeholder */}
      <section className="section-padding services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header centered"
          >
            <span className="overline">Dịch vụ Chuyên gia</span>
            <h2>Gói giải pháp tối ưu cho nhu cầu của bạn</h2>
          </motion.div>

          <div className="services-grid">
            {[
              { title: 'MVP Development', desc: 'Xây dựng sản phẩm tối giản để kiểm chứng thị trường nhanh chóng.' },
              { title: 'UI/UX Audit', desc: 'Đánh giá và tối ưu hóa trải nghiệm người dùng để tăng tỷ lệ chuyển đổi.' },
              { title: 'System Optimization', desc: 'Nâng cấp hiệu suất và bảo mật cho hệ thống hiện có của bạn.' }
            ].map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="service-card"
              >
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className="service-link">Tìm hiểu thêm →</Link>
              </motion.div>
            ))}
          </div>
        </div>
        <style jsx>{`
            .services {
                background-color: var(--bg-primary);
            }
            .centered {
                text-align: center;
                align-items: center;
                margin-bottom: 64px;
            }
            .services-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
            }
            .service-card {
                padding: 40px;
                border: 1px solid var(--border-color);
                border-radius: var(--radius-sm);
                background-color: var(--bg-surface);
                display: flex;
                flex-direction: column;
                gap: 16px;
                transition: border-color 0.3s ease;
            }
            .service-card:hover {
                border-color: var(--accent);
            }
            .service-card h3 {
                font-size: 24px;
            }
            .service-card p {
                font-size: 15px;
                color: var(--text-secondary);
            }
            .service-link {
                margin-top: 12px;
                font-size: 14px;
                font-weight: 600;
                color: var(--accent);
            }
            @media (max-width: 900px) {
                .services-grid {
                    grid-template-columns: 1fr;
                }
            }
          `}</style>
      </section>

      <Footer />
    </main>
  );
}
