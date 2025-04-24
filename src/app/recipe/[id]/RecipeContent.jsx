import { getRecipeById } from "@/api/recipes";
import Image from "next/image";
import RecipeTags from "@/components/shared/RecipeTags";
import RecipeMetadata from "@/components/shared/RecipeMetadata";

export default async function RecipeContent({ id }) {
  const recipe = await getRecipeById(id);

  return (
    <div className="grid gap-10 mt-[30px] md:grid-cols-2 px-5 md:px-[50px] md:items-center gap-x-[75px] gap-y-[70px] md:mt-[40px]">
      <div className="relative w-full h-[266px] md:h-[460px] border border-black">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
          className="object-cover object-center"
          priority
        />
      </div>
      <div>
        <RecipeTags tags={recipe.tags} />
        <h1 className="font-decorative text-5xl mt-2.5 mb-[30px] md:text-[80px] md:mb-[50px]">
          {recipe.name}
        </h1>
        <RecipeMetadata
          level={recipe.difficulty}
          servings={recipe.servings}
          cuisine={recipe.cuisine}
          time={recipe.cookTimeMinutes}
        />
      </div>

      <div className="w-fit border border-black rounded-2xl px-5 py-2.5 md:w-full md:px-[40px] pb-[40px] md:rounded-xl md:pt-0 md:mb-auto md:order-2">
        <h2 className="font-decorative text-[40px] md:text-[64px]">
          Ingredients
        </h2>
        <ul className="mt-[15px] list-disc ml-7.5 space-y-2 text-xl font-medium md:text-2xl md:mt-[25px]">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mx-2.5 md:mb-auto md:order-1">
        <h2 className="font-decorative text-[40px] md:text-[64px]">
          Instructions
        </h2>
        <ol className="mt-[15px] list-decimal ml-7.5 space-y-2 text-xl font-medium md:text-2xl md:mt-[25px]">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
