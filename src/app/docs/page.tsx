"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function DocsPage() {
    const sections = [
        { title: "Khởi tạo môi trường", items: ["Cài đặt Node.js", "Setup Supabase CLI", "Cấu hình biến môi trường"] },
        { title: "Kiến trúc hệ thống", items: ["Cấu trúc thư mục", "Mô hình Database", "Authentication Flow"] },
        { title: "Triển khai sản phẩm", items: ["Build sản xuất", "Deployment lên Vercel", "Cấu hình Custom Domain"] },
    ];

    return (
        <main>
            <Navbar />

            <section className="section-padding">
                <div className="container docs-layout">
                    <aside className="docs-sidebar">
                        <div className="sidebar-group">
                            <h4>Bắt đầu nhanh</h4>
                            <a href="#" className="active">Giới thiệu chung</a>
                            <a href="#">Cấu trúc dự án</a>
                        </div>
                        {sections.map(s => (
                            <div key={s.title} className="sidebar-group">
                                <h4>{s.title}</h4>
                                {s.items.map(i => <a key={i} href="#">{i}</a>)}
                            </div>
                        ))}
                    </aside>

                    <article className="docs-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1>Tài liệu hướng dẫn kỹ thuật</h1>
                            <p className="lead">
                                Chào mừng bạn đến với trung tâm hỗ trợ kỹ thuật. Tại đây bạn sẽ tìm thấy
                                mọi thông tin cần thiết để triển khai và vận hành mã nguồn một cách hiệu quả nhất.
                            </p>

                            <div className="docs-section">
                                <h2>Yêu cầu hệ thống</h2>
                                <ul>
                                    <li>Node.js 18.x trở lên</li>
                                    <li>Tài khoản Supabase (Free Tier cũng được hỗ trợ)</li>
                                    <li>Kiến thức cơ bản về React & TypeScript</li>
                                </ul>
                            </div>

                            <div className="docs-section">
                                <h2>Cấu hình mã nguồn</h2>
                                <p>Trước khi bắt đầu, hãy đảm bảo bạn đã tạo file <code>.env.local</code> và điền đầy đủ các thông tin sau:</p>
                                <div className="code-example">
                                    <pre>
                                        {`NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key`}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    </article>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        .docs-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
        }
        .docs-sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
          position: sticky;
          top: 120px;
          height: fit-content;
        }
        .sidebar-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }
        h4 {
          font-family: var(--font-body);
          font-size: 14px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .sidebar-group a {
          font-size: 15px;
          color: var(--text-secondary);
          padding: 4px 0;
          transition: color 0.2s;
        }
        .sidebar-group a:hover, .sidebar-group a.active {
          color: var(--accent);
          font-weight: 600;
        }

        .docs-content {
          max-width: 800px;
        }
        h1 { font-size: 56px; margin-bottom: 24px; }
        .lead { font-size: 20px; color: var(--text-secondary); margin-bottom: 60px; line-height: 1.6; }
        .docs-section { margin-bottom: 60px; }
        h2 { font-size: 32px; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; }
        ul { padding-left: 24px; color: var(--text-secondary); }
        li { margin-bottom: 12px; }
        code { background-color: var(--bg-secondary); padding: 2px 6px; border-radius: 4px; font-family: var(--font-mono); }
        .code-example { background-color: var(--text-primary); color: var(--bg-primary); padding: 24px; border-radius: 12px; margin-top: 20px; }
        pre { font-family: var(--font-mono); font-size: 14px; line-height: 1.6; }

        @media (max-width: 1024px) {
          .docs-layout { grid-template-columns: 1fr; }
          .docs-sidebar { display: none; }
        }
      `}</style>
        </main>
    );
}
