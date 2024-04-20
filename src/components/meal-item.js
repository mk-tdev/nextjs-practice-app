import Image from "next/image";
import Link from "next/link";

function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="shadow-lg p-3 h-full ">
      <header>
        <Image src={image} alt={title} height={200} width={300} />

        <div>
          <h2>{title}</h2>
          <p className="text-sm">by {creator}</p>
        </div>
      </header>

      <div>
        <p>{summary}</p>

        <div className="p-2 mt-4 bg-cyan-800 text-white">
          <Link href={`/meals/${slug}`}> View Details</Link>
        </div>
      </div>
    </article>
  );
}

export default MealItem;
