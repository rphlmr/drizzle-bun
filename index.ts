// Do not commit this file, it is replaced by presets
// It is intended to test if the template works.
/**
 * 💡Tip: you can use the `$` global variable to access goodies
 */

import { db } from "./db";
import { users } from "./schema";

console.log("⏳ Insert a user");

const [user] = await db
    .insert(users)
    .values({
        name: "test",
    })
    .returning({ id: users.id });

console.log("✅ User inserted", user);

console.log("Get all users");

console.log(await db.select().from(users));
