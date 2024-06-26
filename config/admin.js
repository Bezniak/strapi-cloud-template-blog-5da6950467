module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', process.env.ADMIN_JWT_SECRET),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', process.env.API_TOKEN_SALT),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', process.env.TRANSFER_TOKEN_SALT),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env('APP_KEYS', '03121997,26041990').split(','),
  },
});
