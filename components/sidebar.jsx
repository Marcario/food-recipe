"use client";
import React, { useState, useEffect } from "react";

import getRecipe from "@/libs/getRecipe";
import Link from "next/link";

export default function SideBar({ onItemClick }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeData = await getRecipe();
      setRecipes(recipeData?.d || []);
    };

    fetchRecipes();
  }, []);

  const handleItemClick = (recipe) => {
    onItemClick(recipe);
    console.log(recipe);
  };

  return (
    <div className="bg-fuchsia-100 w-full">
      {recipes.map((recipe, index) => (
        <div key={index} className="p-4 text-black flex items-center">
          <Link
            href={`/detail/id ${recipe.id}`}
            onClick={() => handleItemClick(recipe)}
          >
            <img
              src={recipe.Image}
              alt=""
              className="w-20 h-20 rounded-full mb-4"
            />
            <h2>{recipe.Title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
