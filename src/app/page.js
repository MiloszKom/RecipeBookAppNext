"use client";

import { useState } from "react";
import Header from "@/components/home/Header";
import LoadMoreBtn from "@/components/home/LoadMoreBtn";
import RecipeCard from "@/components/home/RecipeCard";
import ResponsiveDifficultyFilter from "@/components/home/ResponsiveDifficultyFilter";
import Searchbar from "@/components/home/Searchbar";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecipes } from "@/api/recipes";
import RecipeCardSkeleton from "@/components/home/RecipeCardSkeleton";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["recipes", { searchTerm }],
    queryFn: getRecipes,
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.total;
      const fetched = allPages.length * 6;
      return fetched < total ? fetched : undefined;
    },
  });

  const recipes = data?.pages.flatMap((page) => page.recipes) || [];

  const filteredRecipes =
    difficulty === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.difficulty === difficulty);

  return (
    <div className="font-main">
      <Header />
      <div
        className="flex justify-self-center w-full gap-10 flex-col mt-10 px-[30px] mb-12 max-w-[500px]
                 sm:max-w-[850px]
                 lg:mt-[55px] lg:gap-15 lg:max-w-[1440px]"
      >
        <div
          className="flex flex-col gap-10 lg:flex-row 
                   lg:justify-between lg:items-center"
        >
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ResponsiveDifficultyFilter
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>

        <div
          className="grid grid-cols-1 gap-14 w-full
             sm:grid-cols-2 sm:gap-x-7
             lg:grid-cols-3"
        >
          {isError ? (
            <ErrorMesasge message={error.message} />
          ) : isLoading && !data ? (
            Array.from({ length: 6 }).map((_, index) => (
              <RecipeCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : filteredRecipes.length > 0 ? (
            <>
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard key={`recipe-card-${index}`} recipe={recipe} />
              ))}
              {isFetchingNextPage &&
                Array.from({ length: 6 }).map((_, index) => (
                  <RecipeCardSkeleton key={`pagination-skeleton-${index}`} />
                ))}
            </>
          ) : (
            <p className="text-center text-xl font-semibold text-gray-600 mt-10 col-span-full">
              No recipes found.
            </p>
          )}
        </div>

        {hasNextPage && (
          <LoadMoreBtn
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}
