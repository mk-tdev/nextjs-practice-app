"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormActions() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button disabled className="bg-gray-600 text-white p-3 rounded-md">
          Sharing
        </button>
      ) : (
        <button className="bg-red-600 text-white p-3 rounded-md">
          Share Meal
        </button>
      )}
    </>
  );
}
