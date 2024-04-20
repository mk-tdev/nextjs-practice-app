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

      <form className="py-2 " action={shareMeal}>
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
            type="text"
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
