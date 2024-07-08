import type { Config } from "drizzle-kit";

export default {
    dialect: "sqlite",
    schema: "schema.ts",
    out: "drizzle/migrations",
    verbose: false,
    dbCredentials: {
        url: "sqlite.db"
    }
} satisfies Config;
