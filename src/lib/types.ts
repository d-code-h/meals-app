import { Dispatch, SetStateAction } from 'react';

interface MealType {
  idMeal: string;
  strArea: string;
  // strCategory: 'Seafood';
  // strIngredient1: 'Sushi Rice';
  // strIngredient2: 'Rice wine';
  // strIngredient3: 'Caster Sugar';
  // strIngredient4: 'Mayonnaise';
  // strIngredient5: 'Rice wine';
  // strIngredient6: 'Soy Sauce';
  // strIngredient7: 'Cucumber';
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  // strMeasure1: '300ml ';
  // strMeasure2: '100ml';
  // strMeasure3: '2 tbs';
  // strMeasure4: '3 tbs';
  // strMeasure5: '1 tbs';
  // strMeasure6: '1 tbs';
  // strMeasure7: '1';
  strSource: string;
  strTags: null | string;
  strYoutube: string;
}

interface MealsContextType {
  meals: MealType[];
  setMeals: Dispatch<SetStateAction<MealType[]>>;
}

export type { MealType, MealsContextType };
