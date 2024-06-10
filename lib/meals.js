import sql from "better-sqlite3";

// CONNECT TO SQLITE DB
const db = sql("meals.db");

// FETCH DATA FROM DB
export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    //throw new Error("Something went wrong!");
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}