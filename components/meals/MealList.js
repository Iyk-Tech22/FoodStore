import MealItem from "./MealItem";
import styles from "./MealList.module.css";

export default function MealList({ meals }) {
    return (
      <ul className={styles.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    );
}