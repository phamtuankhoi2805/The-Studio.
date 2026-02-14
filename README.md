# Dự án Marketplace & Portfolio (The Studio)

Đây là một dự án website kết hợp giữa **Freelance Portfolio** và **Cửa hàng Sản phẩm Số (Source Code Marketplace)**, được tối ưu hóa cho phong cách "Kiến trúc sư" sang trọng và hiện đại.

## Bắt đầu nhanh

Đầu tiên, hãy khởi chạy máy chủ phát triển:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

Dữ liệu của các sản phẩm và dự án có thể được chỉnh sửa trực tiếp tại `src/lib/data.ts`.

## Triển khai (Deploy) lên Vercel

Cách dễ nhất để triển khai ứng dụng Next.js của bạn là sử dụng **Nền tảng Vercel**.

### Các bước thực hiện:

1.  **Đưa code lên GitHub**: Tạo một Repo mới và push toàn bộ mã nguồn này lên đó.
2.  **Kết nối với Vercel**: Truy cập [Vercel.com](https://vercel.com), chọn "Add New Project" và chọn Repo GitHub của bạn.
3.  **Cấu hình Biến môi trường (Environment Variables)**: 
    - Truy cập phần cài đặt dự án trên Vercel.
    - Copy các giá trị từ file `.env.local` của bạn vào phần cấu hình biến trên Vercel.
4.  **Deploy**: Bấm nút "Deploy".

### Hướng dẫn chi tiết & Phát triển lâu dài
Xem thêm tại tệp: **[deployment_guide.md](file:///C:/Users/khoik7vn/.gemini/antigravity/brain/934fa813-ed1c-4d7f-b83e-97be43352115/deployment_guide.md)** (Trong thư mục brain của hệ thống).

## Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS & Vanilla CSS
- **Animations**: Framer Motion
- **Database/Auth**: Supabase (Hỗ trợ cấu hình Mock Data sẵn)
- **Fonts**: Playfair Display (Serif) & Inter (Sans)
