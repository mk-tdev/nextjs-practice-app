"use client";

import { useFormState } from "react-dom";
import ImagePicker from "@/components/image-picker";
import { shareMeal } from "../../../../lib/actions";
import MealsFormActions from "@/components/meals-form-actions";

const Share = () => {
  const [state, formAction] = useFormState(shareMeal, { message: "" });

  return (
    <div className="p-5">
      <h1 className="font-bold">Share your Fav Meal</h1>
      {state.message && (
        <div
          className="mt-3 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{state.message || "Please fill proper data!"}</p>
        </div>
      )}
      <form className="py-2 " action={formAction}>
        <div className="my-3 flex flex-col ">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="outline-none border-4"
          />
        </div>
        <div className="my-3 flex flex-col ">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="outline-none border-4"
          />
        </div>
        <div className="my-3 flex flex-col ">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="outline-none border-4"
          />
        </div>
        <div className="my-3 flex flex-col ">
          <label htmlFor="shortSum">Short Summary</label>
          <input
            type="text"
            id="shortSum"
            name="shortSum"
            required
            className="outline-none border-4"
          />
        </div>
        <div className="my-3 flex flex-col ">
          <label htmlFor="instructions">Instructions</label>
          <input
            type="text"
            id="instructions"
            name="instructions"
            required
            className="outline-none border-4"
          />
        </div>
        <div className="my-3 flex flex-col ">
          <ImagePicker name={"imagePicker"} label={"Your image"} />
        </div>
        <div className="flex justify-end">
          <MealsFormActions />
        </div>
      </form>
    </div>
  );
};

export default Share;
