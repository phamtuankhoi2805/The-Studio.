"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/data';
import Link from 'next/link';

export default function StorePage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding store-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="header-content"
          >
            <h1>Thư viện Tài sản Số</h1>
            <p>Mã nguồn cao cấp, được chế tác tỉ mỉ để tiết kiệm thời gian phát triển của bạn. Sự hoàn hảo trong từng dòng kiến trúc.</p>
          </motion.div>

          <div className="grid-container">
            <div className="product-grid">
              {PRODUCTS.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
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
                      {product.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                    <div className="card-footer">
                      <Link href={`/marketplace/${product.slug}`} style={{ flex: 1 }}>
                        <Button variant="outline" fullWidth>Xem chi tiết</Button>
                      </Link>
                      <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                        <Button variant="secondary" fullWidth>Live Demo</Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .store-header {
          background-color: var(--bg-primary);
        }
        .header-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 100px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        h1 {
          font-size: 56px;
          letter-spacing: -1.5px;
        }
        .header-content p {
          font-size: 18px;
          color: var(--text-secondary);
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .product-card {
            background-color: var(--bg-surface);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-4px);
        }
        .card-image-box {
            overflow: hidden;
            height: 200px;
        }
        .card-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
        }
        .card-content {
            padding: 24px;
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
        }
        .price {
            font-size: 16px;
            font-weight: 500;
        }
        h3 {
            font-size: 20px;
            letter-spacing: -0.5px;
        }
        .description {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
            height: 44px;
            overflow: hidden;
        }
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .tech-tag {
            font-size: 10px;
            background-color: #F0F0F0;
            padding: 3px 8px;
            border-radius: var(--radius-sm);
            color: #666;
        }
        .card-footer {
            margin-top: auto;
            padding-top: 12px;
            display: flex;
            gap: 8px;
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
          .card-footer {
              flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
