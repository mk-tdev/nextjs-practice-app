import Image from "next/image";
import Link from "next/link";
import { getMeal } from "../../../../lib/meals";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

function MealDetails({ params }: { params: { slug: string } }) {
  const meal = getMeal(params.slug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <div>
      <header>
        <div className="w-48">
          <Image src={meal.image} width={100} height={100} alt={meal.title} />
        </div>
        <div>
          <h1>{meal.title}</h1>
          <p>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          dangerouslySetInnerHTML={{
            __html: `${meal.instructions}`,
          }}
        ></p>
      </main>
    </div>
  );
}

export default MealDetails;
