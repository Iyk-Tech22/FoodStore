import Link from "next/link";
import styles from "./page.module.css";
import MealList from "@/components/meals/MealList";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
    const meals = await getMeals()
    return <MealList meals={meals} />;
}

export default function MealsPage() {

    return (
      <>
        <header className={styles.header}>
          <h1>
            Delicious Meal, created{" "}
            <span className={styles.highlight}>by you</span>
          </h1>
          <p>
            Choose your favorite recipe adn cook it yourself, It is easy and
            fun!
          </p>
          <p className={styles.cta}>
            <Link href="/meals/share">Share your favorite recipe</Link>
          </p>
        </header>
        <main className={styles.main}>
          <Suspense
            fallback={<p className={styles.loading}>Fetching Meals...</p>}
          >
            <Meals />
          </Suspense>
        </main>
      </>
    );
}