import Link from "next/link";
import React from "react";

import RecipeMetadata from "../shared/RecipeMetadata";
import RecipeTags from "../shared/RecipeTags";
import { getStyleByDifficulty } from "@/utils/styleHelpers";
import CustomImage from "../shared/CustomImage";

export default function RecipeCard({ recipe }) {
  return (
    <Link
      href={`recipe/${recipe.id}`}
      className="flex flex-col border border-black rounded-2xl w-full overflow-hidden cursor-pointer"
    >
      <div className="w-full h-[220px] lg:h-[260px] border-b border-black overflow-hidden">
        <CustomImage
          src={recipe.image}
          alt={recipe.name}
          width={550}
          height={220}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="flex flex-col p-[17.5px] flex-1">
        <RecipeTags tags={recipe.tags} />
        <div className="flex flex-col mt-auto">
          <h1 className="text-[40px] font-decorative whitespace-nowrap overflow-hidden text-ellipsis mt-2.5 mb-5 lg:mt-6">
            {recipe.name}
          </h1>
          <RecipeMetadata
            cuisine={recipe.cuisine}
            time={recipe.cookTimeMinutes}
          />
          <div
            className={`w-fit px-5 py-1 border rounded-xl mt-6 lg:mt-10 ${getStyleByDifficulty(
              recipe.difficulty
            )}`}
          >
            {recipe.difficulty}
          </div>
        </div>
      </div>
    </Link>
  );
}
