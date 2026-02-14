"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';

export default function WorkPage() {
    return (
        <main>
            <Navbar />

            <section className="section-padding work-header">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="header-content"
                    >
                        <h1>Case Studies</h1>
                        <p>A collection of technical challenges aimed at business growth. Crafting digital excellence through architectural integrity.</p>
                    </motion.div>

                    <div className="work-list">
                        {PROJECTS.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className={`work-item ${idx % 2 !== 0 ? 'row-reverse' : ''}`}
                            >
                                <div className="work-image-box">
                                    <div className="work-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                                </div>
                                <div className="work-info">
                                    <span className="year">{project.year}</span>
                                    <h2>{project.title}</h2>
                                    <div className="meta">
                                        <span><strong>Client:</strong> {project.client}</span>
                                        <span><strong>Role:</strong> {project.role}</span>
                                    </div>
                                    <p>{project.challenge}</p>
                                    <Button variant="outline">Explore Solution</Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        .work-header {
          background-color: var(--bg-primary);
        }
        .header-content {
          margin-bottom: 120px;
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
          max-width: 600px;
        }
        .work-list {
          display: flex;
          flex-direction: column;
          gap: 160px;
        }
        .work-item {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          align-items: center;
        }
        .work-item.row-reverse {
          grid-template-columns: 0.8fr 1.2fr;
          direction: row-reverse;
        }
        /* Fix for row-reverse text alignment */
        .work-item.row-reverse .work-info {
            direction: ltr;
        }
        .work-image-box {
          height: 550px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .work-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
        .work-info {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .year {
          font-size: 14px;
          color: var(--text-tertiary);
          font-weight: 500;
        }
        h2 {
          font-size: 40px;
          letter-spacing: -1px;
        }
        .meta {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 15px;
            color: var(--text-secondary);
        }
        .meta strong {
            color: var(--text-primary);
        }
        p {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        @media (max-width: 1024px) {
          .work-item {
            grid-template-columns: 1fr !important;
            gap: 40px;
            direction: ltr !important;
          }
          .work-image-box {
              height: 400px;
          }
        }
      `}</style>
        </main>
    );
}
