import { createContext, ReactNode, useEffect, useState } from 'react';
import { MealsContextType, MealType } from '../lib/types';

import axios from 'axios';

export const MealsContext = createContext<null | MealsContextType>(null);

const GlobalMealsContext = ({ children }: { children: ReactNode }) => {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState<string>('');

  const filteredMeals = meals.filter((meal) =>
    Object.values(meal).join('').toLowerCase().includes(search.toLowerCase())
  );

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

  const handleFavorites = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((each) => each !== id));
    } else {
      setFavorites((prev) => [...prev, id]);
    }
  };

  return (
    <MealsContext.Provider
      value={{
        meals,
        setMeals,
        filteredMeals,
        favorites,
        setFavorites,
        handleFavorites,
        search,
        setSearch,
        open,
        setOpen,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default GlobalMealsContext;
