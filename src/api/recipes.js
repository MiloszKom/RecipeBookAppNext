import axios from "axios";
import { cache } from "react";

const API_BASE_URL = "https://dummyjson.com/recipes";

export const getRecipes = async ({ pageParam = 0, queryKey }) => {
  const [_key, { searchTerm }] = queryKey;

  const endpoint = searchTerm
    ? `${API_BASE_URL}/search?q=${searchTerm}`
    : API_BASE_URL;

  const response = await axios.get(endpoint, {
    params: {
      limit: 6,
      skip: pageParam,
    },
  });

  return response.data;
};

export const getRecipeById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch recipe with id ${id}`);
  }

  return res.json();
};
