export interface Product {
    id: string;
    slug: string;
    title: string;
    basePrice: number;
    licensePrices: {
        personal: number;
        commercial: number;
    };
    category: string;
    description: string;
    tech: string[];
    image: string;
    demoUrl: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    client: string;
    role: string;
    year: string;
    challenge: string;
    solution: string;
    outcome: string;
    image: string;
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        slug: 'saas-foundation-kit',
        title: 'SaaS Foundation Kit',
        basePrice: 199,
        licensePrices: {
            personal: 199,
            commercial: 499
        },
        category: 'Hệ thống',
        description: 'Bộ mã nguồn hoàn chỉnh để xây dựng ứng dụng SaaS quy mô lớn. Tích hợp sẵn Xác thực, Thanh toán Stripe và cấu trúc Database tối ưu.',
        tech: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
        demoUrl: 'https://demo.example.com/saas'
    },
    {
        id: '2',
        slug: 'ecommerce-headless-ui',
        title: 'E-commerce Headless UI',
        basePrice: 149,
        licensePrices: {
            personal: 149,
            commercial: 399
        },
        category: 'Frontend',
        description: 'Giao diện cửa hàng hiệu suất cao được tối ưu hóa cho tỷ lệ chuyển đổi và tốc độ tải trang cực nhanh.',
        tech: ['React', 'Tailwind', 'Framer Motion', 'Shopify API'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
        demoUrl: 'https://demo.example.com/shop'
    }
];

export const PROJECTS: Project[] = [
    {
        id: '1',
        slug: 'fintech-dashboard',
        title: 'Tái thiết kế Dashboard Fintech',
        client: 'FinCorp Global',
        role: 'Thiết kế sản phẩm & Phát triển',
        year: '2024',
        challenge: 'Hệ thống cũ có trải nghiệm người dùng (UX) kém, dẫn đến tỷ lệ người dùng rời bỏ lên đến 20% hàng tháng.',
        solution: 'Tái cấu trúc lại phân cấp thông tin và triển khai hệ thống thiết kế (Design System) hiện đại, tập trung vào hiệu suất.',
        outcome: 'Tăng tỷ lệ giữ chân người dùng lên 45% chỉ trong vòng 3 tháng sau khi ra mắt.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '2',
        slug: 'healthcare-platform',
        title: 'Nền tảng Đặt lịch Y tế',
        client: 'MediConnect',
        role: 'Phát triển Full-stack',
        year: '2023',
        challenge: 'Xảy ra nhiều xung đột khi đặt lịch và thời gian phản hồi máy chủ chậm ảnh hưởng đến trải nghiệm bệnh nhân.',
        solution: 'Di chuyển sang kiến trúc serverless với khả năng đồng bộ dữ liệu thời gian thực và thuật toán tối ưu hóa lịch trình.',
        outcome: 'Giảm thời gian tải trang xuống dưới 100ms và loại bỏ hoàn toàn tình trạng trùng lịch đặt.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
    }
];
