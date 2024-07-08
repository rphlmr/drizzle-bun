// Do not commit this file, it is replaced by presets
// It is intended to test if the template works.
/**
 * This is the schema for the database.
 * Do not forget to `export` your tables 😅
 */

import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name"),
});
