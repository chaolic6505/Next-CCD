import * as dotenv from 'dotenv';
import { defineConfig } from "drizzle-kit";

dotenv.config({
    path: '.env.local',
});

export default defineConfig({
    driver:"turso",
    out: "./drizzle",
    dialect: "sqlite",
    schema: "./src/db/schema/*.ts",
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DATABASE_URL!,
        authToken: process.env.NEXT_PUBLIC_AUTH_TOKEN!,
    },
});