import MealGrid from "@/components/meal-grid";
import Link from "next/link";
import { getMeals } from "../../../lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header>
        <h1 className="font-bold">Meals Page</h1>
        <h2 className="text-blue-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit, justo ut malesuada dapibus.
        </h2>
        <p className="my-2 p-2 bg-green-600 text-white rounded-md">
          <Link href={"/meals/share"}> Share Your Fav </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<div>Fetching.. data!</div>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
