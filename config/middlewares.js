// ./config/middlewares.js
module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "http://127.0.0.1:9001/browser/strapi/",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "http://127.0.0.1:9001/browser/strapi/",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
