import Link from "next/link";
import React from "react";
import RecipeTags from "@/components/shared/RecipeTags";
import RecipeMetadata from "@/components/shared/RecipeMetadata";

export default function RecipeDetail() {
  const recipe = {
    image: null,
    tags: ["good", "tasty"],
    name: "Delicioso recipe mammamia",
    ingredients: ["1", "2", "3"],
    instructions: ["Preheat the over", "step 2", "step 3"],
  };

  return (
    <div className="py-5 md:py-[30px]">
      <div
        className="grid grid-cols-[1fr_auto] items-center gap-2.5 px-5 md:px-[0px] md:pl-[50px]
               md:grid-cols-[1fr_auto_1fr]"
      >
        <div className="flex gap-2.5 items-center md:gap-[33px]">
          <Link
            href="/"
            className="px-5 border border-black rounded-xl font-decorative text-[32px] whitespace-nowrap"
          >
            Go Back
          </Link>
          <div className="w-full h-[3px] bg-black rounded-2xl" />
        </div>
        <div className="flex items-center px-5">
          <img
            src="/bowl_dark.svg"
            alt="Bowl Icon"
            className="md:w-[80px] md:h-[80px]"
          />
          <p className="hidden md:block font-decorative text-[40px]">
            Recipe Book
          </p>
        </div>
        <div className="hidden md:block w-full h-[3px] bg-black rounded-2xl" />
      </div>

      <div
        className="grid gap-10 mt-[30px] md:grid-cols-2 px-5 md:px-[50px]
               md:items-center gap-x-[75px] gap-y-[70px] md:mt-[40px]"
      >
        <div
          className="w-full h-[266px] bg-cover bg-center border border-black
                 md:h-[460px]"
          style={{ backgroundImage: `url('${recipe.image}')` }}
        />
        <div>
          <RecipeTags tags={recipe.tags} />
          <h1 className="font-decorative text-5xl mt-2.5 mb-[30px] md:text-[80px] md:mb-[50px]">
            {recipe.name}
          </h1>
          <RecipeMetadata
            level={"Hard"}
            servings={4}
            cuisine={"Korean"}
            time={90}
          />
        </div>
        <div
          className="w-fit border border-black rounded-2xl px-5 py-2.5 
                md:w-full md:px-[40px] pb-[40px] md:rounded-xl md:pt-0 md:mb-auto md:order-2"
        >
          <h2 className="font-decorative text-[40px] md:text-[64px]">
            Ingredients
          </h2>
          <ul className="mt-[15px] list-disc ml-7.5 space-y-2 text-xl font-medium md:text-2xl md:mt-[25px]">
            {recipe.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>

        <div className="mx-2.5 md:mb-auto md:order-1">
          <h2 className="font-decorative text-[40px] md:text-[64px]">
            Instructions
          </h2>
          <ol className="mt-[15px] list-decimal ml-7.5 space-y-2 text-xl font-medium md:text-2xl md:mt-[25px]">
            {recipe.instructions.map((step, index) => {
              return <li key={index}>{step}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
