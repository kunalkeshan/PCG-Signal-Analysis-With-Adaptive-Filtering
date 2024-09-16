/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{
      hostname: 'api.dicebear.com',
      pathname: '/**/*',
      protocol: 'https'
    }]
  }
};

export default nextConfig;
