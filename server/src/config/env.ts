export const env = {
    db: {
        host: process.env.DB_HOST || "db",
        port: Number(process.env.DB_PORT || 5432),
        user: process.env.DB_USER || "dollar",
        password: process.env.DB_PASSWORD || "dollar",
        name: process.env.DB_NAME || "dollar_db",
    },
    nodeEnv: process.env.NODE_ENV || "development",
    initDb: process.env.INIT_DB === "true",
};
