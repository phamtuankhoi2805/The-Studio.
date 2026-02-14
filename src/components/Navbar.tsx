"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="navbar"
    >
      <div className="container nav-content">
        <Link href="/" className="logo">
          The Studio.
        </Link>
        <div className="nav-links">
          <Link href="/portfolio">Dự án</Link>
          <Link href="/marketplace">Cửa hàng</Link>
          <Link href="/#about">Về chúng tôi</Link>
        </div>
        <div className="nav-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cart-btn"
          >
            <ShoppingBag size={20} />
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className="nav-cta">
              Bắt đầu dự án
            </Link>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          height: 90px;
          display: flex;
          align-items: center;
          width: 100%;
          position: sticky;
          top: 0;
          background-color: var(--bg-primary);
          z-index: 100;
          border-bottom: 1px solid var(--border-color);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }
        .nav-links {
          display: flex;
          gap: 40px;
        }
        .nav-links :global(a) {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .nav-links :global(a:hover) {
          color: var(--text-primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .cart-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
        }
        .nav-cta {
          display: inline-block;
          border: 1px solid var(--text-primary);
          color: var(--text-primary) !important;
          padding: 10px 24px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .nav-cta:hover {
          background-color: var(--text-primary);
          color: white !important;
        }
      `}</style>
    </motion.nav>
  );
}
