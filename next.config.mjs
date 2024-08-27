/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://image.tmdb.org/', 'cdn.freebiesupply.com','www.nicepng.com','images.pexels.com','png.pngtree.com','png.pngtree.com','res.cloudinary.com','www.transparentpng.com'],
      },
     experimental: {
        instrumentationHook: true,
    },
};

export default nextConfig;
