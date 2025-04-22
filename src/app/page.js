import Header from "@/components/home/Header";
import RecipeCard from "@/components/home/RecipeCard";
import ResponsiveDifficultyFilter from "@/components/home/ResponsiveDifficultyFilter";
import Searchbar from "@/components/home/Searchbar";

export default function Home() {
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
          <Searchbar />
          <ResponsiveDifficultyFilter />
        </div>
        <div
          className="grid grid-cols-1 gap-14 w-full
             sm:grid-cols-2 sm:gap-x-7
             lg:grid-cols-3"
        >
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>

        <button
          className={`max-w-[180px] mx-auto mt-10 px-10 py-0.5 border border-black rounded-xl text-[32px] font-decorative 
              hover:shadow-[0_0_10px_0_rgba(255,165,0,0.7)] transition-shadow duration-200`}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
