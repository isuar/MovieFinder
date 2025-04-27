// Netlify-specific configuration
export default {
  // Required for single-page applications 
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
      },
    ];
  },
  // Add headers for proper MIME types
  headers: async () => {
    return [
      {
        source: '/(.*).js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/(.*).mjs',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/(.*).css',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
    ];
  },
};
