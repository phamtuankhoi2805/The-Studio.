"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <Link href="/portfolio">Dự án</Link>
          <Link href="/marketplace">Cửa hàng</Link>
          <Link href="/docs">Tài liệu</Link>
        </div>

        <div className="nav-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cart-btn"
          >
            <ShoppingBag size={20} />
          </motion.button>

          <div className="desktop-only">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="nav-cta">
                Bắt đầu dự án
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <div className="mobile-links">
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>Dự án</Link>
              <Link href="/marketplace" onClick={() => setIsOpen(false)}>Cửa hàng</Link>
              <Link href="/docs" onClick={() => setIsOpen(false)}>Tài liệu</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mobile-cta">
                Bắt đầu dự án
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          height: 80px;
          display: flex;
          align-items: center;
          width: 100%;
          position: sticky;
          top: 0;
          background-color: rgba(249, 247, 242, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
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
          font-size: 24px;
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
          gap: 20px;
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
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background-color: var(--bg-primary);
          padding: 40px 24px;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        }
        .mobile-links :global(a) {
          font-size: 18px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .mobile-cta {
          margin-top: 12px;
          width: 100%;
          text-align: center;
          padding: 16px;
          background-color: var(--text-primary);
          color: white !important;
          border-radius: var(--radius-sm);
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .logo {
            font-size: 20px;
          }
        }
      `}</style>
    </motion.nav>
  );
}
