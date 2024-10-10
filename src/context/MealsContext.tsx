import { createContext, ReactNode, useState } from 'react';
import { MealsContextType, MealType } from '../lib/types';

export const MealsContext = createContext<null | MealsContextType>(null);

const GlobalMealsContext = ({ children }: { children: ReactNode }) => {
  const [meals, setMeals] = useState<MealType[] | []>([
    { id: '1', name: 'rice' },
  ]);

  return (
    <MealsContext.Provider
      value={{
        meals,
        setMeals,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default GlobalMealsContext;
