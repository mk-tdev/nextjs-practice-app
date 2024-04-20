"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export async function shareMeal(prevState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("shortSum"),
    instructions: formData.get("instructions"),
    image: formData.get("imagePicker"),
  };

  // validate

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.summary) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid Input");

    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
