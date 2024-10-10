import { Dispatch, SetStateAction } from 'react';

interface MealType {
  idMeal: string;
  strArea: string;
  strCategory: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strSource: string;
  strTags: null | string;
  strYoutube: string;
}

interface MealsContextType {
  meals: MealType[];
  setMeals: Dispatch<SetStateAction<MealType[]>>;
}

export type { MealType, MealsContextType };
