"use client";

import React, { useState } from "react";
import MobileDifficultyFilter from "./filters/MobileDifficultyFilter";
import DesktopDifficultyFilter from "./filters/DesktopDifficultyFilter";

export default function ResponsiveDifficultyFilter() {
  const [difficulty, setDifficulty] = useState("All");

  return (
    <>
      <MobileDifficultyFilter
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <DesktopDifficultyFilter
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    </>
  );
}
