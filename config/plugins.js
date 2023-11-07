module.exports = ({ env }) => ({
    upload: {
      provider: "tp-minio",
      providerOptions: {
        accessKey: "47titQTQP43YX6CDaCdz",
        secretKey: "PQ0mAi4ZxTO1qDJChCB51SddQ4IzxHb0KSgy10MP",
        bucket:  "strapi",
        endPoint:  "localhost",
        port: 9000 || 9001,
        useSSL: false,
        // folder: "upload",
        // isDocker: true,
        host: "localhost:9000" || "localhost:9001"
      }
    }
  });