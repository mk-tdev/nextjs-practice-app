import MealItem from "./meal-item";

function MealGrid({ meals }) {
  return (
    <ul className="grid gap-4 grid-cols-3 grid-rows-3">
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}

export default MealGrid;
