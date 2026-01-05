// import dotenv from "dotenv";

// dotenv.config();

// function must(name: string): string {
//     const value = process.env[name];
//     if (!value) {
//         throw new Error(`Missing ENV variable: ${name}`);
//     }
//     return value;
// }

// export const env = {
//     db: {
//         host: must("DB_HOST"),
//         port: Number(process.env.DB_PORT ?? 5432),
//         user: must("DB_USER"),
//         password: must("DB_PASSWORD"),
//         name: must("DB_NAME"),
//     },

// nodeEnv: process.env.NODE_ENV ?? "development",
// };

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
