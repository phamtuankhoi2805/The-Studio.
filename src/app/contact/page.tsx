"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="section-padding contact">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="contact-text"
            >
              <span className="overline">Liên hệ</span>
              <h1>Bắt đầu hành trình <br /> di sản số của bạn.</h1>
              <p>
                Dù bạn cần tư vấn giải pháp mã nguồn hay muốn xây dựng một sản phẩm tùy chỉnh từ con số 0,
                tôi luôn sẵn sàng lắng nghe bài toán của bạn.
              </p>

              <div className="contact-methods">
                <div className="method">
                  <span className="label">Email</span>
                  <a href="mailto:hello@thestudio.com">hello@thestudio.com</a>
                </div>
                <div className="method">
                  <span className="label">Địa điểm</span>
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
              </div>

              <div className="calendly-promo">
                <p>Cần thảo luận trực tiếp? Đặt lịch tư vấn 15 phút:</p>
                <Button variant="outline">Đặt lịch qua Calendly →</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="contact-form-container"
            >
              <form className="contact-form">
                <div className="form-group">
                  <label>Họ và tên</label>
                  <input type="text" placeholder="Nguyễn Văn A" />
                </div>
                <div className="form-group">
                  <label>Email công việc</label>
                  <input type="email" placeholder="name@company.com" />
                </div>
                <div className="form-group">
                  <label>Chủ đề</label>
                  <select>
                    <option>Mua Source Code / Bản quyền</option>
                    <option>Phát triển Dự án mới (Freelance)</option>
                    <option>Yêu cầu Tư vấn / Audit</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Lời nhắn của bạn</label>
                  <textarea rows={5} placeholder="Chia sẻ một chút về nhu cầu của bạn..."></textarea>
                </div>
                <Button size="lg" fullWidth>Gửi yêu cầu liên hệ</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .contact {
          background-color: var(--bg-primary);
          min-height: 80vh;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: start;
        }
        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        h1 {
          font-size: 56px;
          letter-spacing: -1.5px;
        }
        p {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .contact-methods {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 16px;
        }
        .method {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .method .label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-tertiary);
        }
        .method a, .method span {
            font-size: 18px;
            color: var(--text-primary);
            font-weight: 500;
        }
        .calendly-promo {
            background-color: var(--bg-secondary);
            padding: 32px;
            border-radius: var(--radius-sm);
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .calendly-promo p {
            font-size: 15px;
            color: var(--text-primary);
        }
        .contact-form-container {
          background-color: var(--bg-surface);
          padding: 48px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-medium);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }
        input, select, textarea {
          padding: 14px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 15px;
          background-color: var(--bg-secondary);
          transition: border-color 0.2s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--accent);
          background-color: white;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
        }
      `}</style>
    </main>
  );
}
