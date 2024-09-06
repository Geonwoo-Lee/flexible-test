/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // SVG 파일을 React 컴포넌트로 사용하기 위한 설정
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;