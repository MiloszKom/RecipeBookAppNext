import Link from "next/link";

export default function RecipeLayout({ children }) {
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

      {children}
    </div>
  );
}
