import Link from "next/link";
import React from "react";

import RecipeMetadata from "../shared/RecipeMetadata";
import RecipeTags from "../shared/RecipeTags";
import { getStyleByDifficulty } from "@/utils/styleHelpers";

export default function RecipeCard() {
  return (
    <Link
      href={`recipe`}
      className="flex flex-col border border-black rounded-2xl w-full overflow-hidden cursor-pointer"
    >
      <div className="w-full h-[220px] lg:h-[260px] border-b border-black overflow-hidden">
        <img className="w-full h-full object-cover transition-opacity duration-300 opacity-0" />
      </div>
      <div className="flex flex-col p-[17.5px]">
        <RecipeTags tags={["korean", "spicy"]} />
        <h1 className="text-[40px] font-decorative whitespace-nowrap overflow-hidden text-ellipsis mt-2.5 mb-5 lg:mt-6">
          Super good food
        </h1>
        <RecipeMetadata cuisine={"Korean"} time={90} />
        <div
          className={`w-fit px-5 py-1 border rounded-xl mt-6 lg:mt-10 ${getStyleByDifficulty(
            "Easy"
          )}`}
        >
          {"Easy"}
        </div>
      </div>
    </Link>
  );
}
