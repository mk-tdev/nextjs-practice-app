import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 200);
  });

  // throw new Error("something went wrong!");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("image upload failed!");
    }
  });
  meal.image = `/images/${fileName}`;

  return db
    .prepare(
      `
  INSERT INTO meals (title, summary, slug, image, creator, creator_email, instructions)
  VALUES(@title, @summary, @slug, @image, @creator, @creator_email, @instructions) `
    )
    .run(meal);
};
