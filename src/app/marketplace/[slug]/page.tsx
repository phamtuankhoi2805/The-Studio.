"use client";

import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/data';
import { useState } from 'react';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find(p => p.slug === slug);
  const [license, setLicense] = useState<'personal' | 'commercial'>('personal');

  if (!product) return <div>Product not found</div>;

  const currentPrice = license === 'personal' ? product.licensePrices.personal : product.licensePrices.commercial;

  return (
    <main>
      <Navbar />

      <section className="section-padding product-detail">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="breadcrumbs"
          >
            Cửa hàng / {product.category} / {product.title}
          </motion.div>

          <div className="product-hero">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="product-gallery"
            >
              <div className="main-image" style={{ backgroundImage: `url(${product.image})` }}></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="product-info"
            >
              <span className="overline">{product.category}</span>
              <h1>{product.title}</h1>
              <p className="description">{product.description}</p>

              <div className="tech-stack-header">Công nghệ sử dụng</div>
              <div className="tech-stack">
                {product.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>

              <div className="licensing-section">
                <div className="license-toggle">
                  <button
                    className={license === 'personal' ? 'active' : ''}
                    onClick={() => setLicense('personal')}
                  >
                    Cá nhân
                  </button>
                  <button
                    className={license === 'commercial' ? 'active' : ''}
                    onClick={() => setLicense('commercial')}
                  >
                    Thương mại
                  </button>
                </div>

                <div className="price-display">
                  <span className="price">${currentPrice}</span>
                  <span className="license-desc">
                    {license === 'personal' ? 'Dùng cho dự án cá nhân.' : 'Dùng cho khách hàng và dự án thương mại.'}
                  </span>
                </div>
              </div>

              <div className="purchase-actions">
                <Button size="lg" fullWidth>Mua bản quyền ngay</Button>
                <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                  <Button variant="outline" size="lg" fullWidth>Trải nghiệm Live Demo</Button>
                </a>
              </div>

              <div className="trust-badges">
                <span>✓ Giao hàng tức thì qua Email</span>
                <span>✓ Hỗ trợ kỹ thuật 24/7</span>
              </div>
            </motion.div>
          </div>

          {/* Documentation Preview */}
          <div className="doc-preview">
            <h2>Hướng dẫn triển khai</h2>
            <div className="doc-card">
              <div className="doc-sidebar">
                <div className="active">1. Bắt đầu</div>
                <div>2. Cấu hình Env</div>
                <div>3. Database Setup</div>
              </div>
              <div className="doc-content">
                <h3>1. Bắt đầu</h3>
                <p>Giải nén file `.zip` bạn nhận được. Chạy lệnh sau để cài đặt dependencies:</p>
                <code>npm install</code>
                <p>Sau đó, khởi chạy môi trường phát triển:</p>
                <code>npm run dev</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .product-detail {
          background-color: var(--bg-primary);
        }
        .breadcrumbs {
          font-size: 13px;
          color: var(--text-tertiary);
          margin-bottom: 48px;
        }
        .product-hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          margin-bottom: 120px;
        }
        .main-image {
          width: 100%;
          height: 600px;
          background-size: cover;
          background-position: center;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }
        .product-info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        h1 {
          font-size: 48px;
          letter-spacing: -1px;
        }
        .description {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .tech-stack-header {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-tertiary);
            margin-bottom: -16px;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tech-tag {
          font-size: 12px;
          background-color: #F0F0F0;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          color: #666;
          font-weight: 500;
        }
        .licensing-section {
          background-color: var(--bg-secondary);
          padding: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .license-toggle {
          display: flex;
          background-color: white;
          padding: 4px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }
        .license-toggle button {
          flex: 1;
          padding: 10px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }
        .license-toggle button.active {
          background-color: var(--text-primary);
          color: white;
        }
        .price-display {
          display: flex;
          align-items: baseline;
          gap: 16px;
        }
        .price {
          font-size: 36px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .license-desc {
          font-size: 14px;
          color: var(--text-secondary);
        }
        .purchase-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .trust-badges {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: var(--text-tertiary);
        }
        .doc-preview {
            max-width: 900px;
            margin: 0 auto;
        }
        .doc-preview h2 {
            font-size: 32px;
            margin-bottom: 40px;
        }
        .doc-card {
            display: grid;
            grid-template-columns: 240px 1fr;
            background-color: white;
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            overflow: hidden;
        }
        .doc-sidebar {
            background-color: var(--bg-secondary);
            padding: 32px;
            border-right: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            gap: 16px;
            font-size: 14px;
            color: var(--text-secondary);
        }
        .doc-sidebar .active {
            color: var(--accent);
            font-weight: 600;
        }
        .doc-content {
            padding: 48px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        code {
            display: block;
            background-color: #1A1A1A;
            color: #D1D1D1;
            padding: 16px;
            border-radius: var(--radius-sm);
            font-family: monospace;
            font-size: 14px;
        }

        @media (max-width: 1024px) {
          .product-hero {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
