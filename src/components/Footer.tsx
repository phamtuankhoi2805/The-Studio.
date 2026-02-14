"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">The Studio.</Link>
            <p>Kiến tạo di sản số cho sự phát triển. Sự hoàn hảo trong kiến trúc mã nguồn được hiện thực hóa trong từng sản phẩm.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Khám phá</h4>
              <Link href="/portfolio">Dự án</Link>
              <Link href="/marketplace">Cửa hàng</Link>
              <Link href="/docs">Phương pháp luận</Link>
            </div>

            <div className="link-group">
              <h4>Kết nối</h4>
              <a href="https://linkedin.com">LinkedIn</a>
              <a href="https://github.com">GitHub</a>
              <a href="mailto:contact@example.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 The Studio. Bảo lưu toàn bộ quyền.</p>
          <div className="legal">
            <Link href="/privacy">Bảo mật</Link>
            <Link href="/terms">Điều khoản</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #1A1A1A;
          color: #D1D1D1;
          padding: 100px 0 40px;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 80px;
        }
        .footer-brand {
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 500;
          color: white;
        }
        .footer-brand p {
          color: #888;
          font-size: 14px;
          line-height: 1.6;
        }
        .footer-links {
          display: flex;
          gap: 100px;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        h4 {
          color: white;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-family: var(--font-body);
        }
        .link-group :global(a) {
          color: #888;
          font-size: 14px;
          transition: color 0.2s ease;
        }
        .link-group :global(a:hover) {
          color: white;
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #555;
        }
        .legal {
          display: flex;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 48px;
          }
          .footer-links {
            gap: 64px;
          }
        }
      `}</style>
    </footer>
  );
}
