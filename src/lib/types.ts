import { Dispatch, SetStateAction } from 'react';

interface MealType {
  id: string;
  name: string;
}

interface MealsContextType {
  meals: MealType[];
  setMeals: Dispatch<SetStateAction<MealType[]>>;
}

export type { MealType, MealsContextType };
