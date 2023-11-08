module.exports = ({ env }) => ({
  // upload: {
  //   provider: "tp-minio",
  //   providerOptions: {
  //     accessKey: env("MINIO_ACCESS_KEY"),
  //     secretKey: env("MINIO_SECRET_KEY"),
  //     bucket: env("MINIO_BUCKET"),
  //     endPoint: env("MINIO_ENDPOINT"),
  //     port: parseInt(env("MINIO_PORT", 9000), 10) || 9000,
  //     useSSL: env("MINIO_USE_SSL"),
  //     folder: "upload",
  //     isDocker: true,
  //     host: env("MINIO_HOST")
  //   }
  // },
    upload: {
      config: {
        provider: 'strapi-provider-upload-minio-ce',
        providerOptions: {
          accessKey: env('MINIO_ACCESS_KEY'),
          secretKey: env('MINIO_SECRET_KEY'),
          bucket: env('MINIO_BUCKET'),
          endPoint: env('MINIO_ENDPOINT'),
          port: env('MINIO_PORT'),
          useSSL: env('MINIO_USE_SSL'),
          folder: env('MINIO_FOLDER'),
          private: env('MINIO_PRIVATE'), // private bucket
          expiry: env('MINIO_EXPIRY'), // default 7 days, unit: seconds, only work for private bucket
        },
      },
    },
  });