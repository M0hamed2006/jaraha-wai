/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // يخلي المشروع يتولد كـ static
  images: {
    unoptimized: true,     // عشان مشاكل الصور في GitHub Pages
  },
  basePath: '/jaraha-wai', // مهم جدًا عشان اللينك يشتغل صح على GitHub Pages
};

export default nextConfig;
