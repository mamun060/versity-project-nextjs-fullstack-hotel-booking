/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // add external path for image 
      domains: ['a0.muscache.com', 'lh3.googleusercontent.com'],
    },
    experimental: {
      serverComponents: true
    }
  };
  
  export default nextConfig;
  