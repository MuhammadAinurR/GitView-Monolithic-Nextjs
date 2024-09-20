/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://api.github.com/:path*",
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Authorization",
                        value: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
