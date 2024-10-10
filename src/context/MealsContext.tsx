import { createContext, ReactNode, useEffect, useState } from 'react';
import { MealsContextType, MealType } from '../lib/types';

import axios from 'axios';

export const MealsContext = createContext<null | MealsContextType>(null);

const GlobalMealsContext = ({ children }: { children: ReactNode }) => {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const getMeals = async () => {
      const {
        data: { meals },
      } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='
      );

      setMeals(() => [...meals]);
    };

    getMeals();
  }, []);

  return (
    <MealsContext.Provider
      value={{
        meals,
        setMeals,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default GlobalMealsContext;
