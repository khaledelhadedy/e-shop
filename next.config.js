// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          pathname: '/img/**', // Allow specific image path
        },
      ],
    },
  };
  