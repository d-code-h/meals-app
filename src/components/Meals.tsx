import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType, MealType } from '../lib/types';
import MealCard from './MealCard';

const Meals = ({ meal }: { meal: MealType }) => {
  const { setOpen } = useContext(MealsContext) as MealsContextType;

  return (
    <div
      key={meal.idMeal}
      className="transition-all duration-500 rounded-md hover:shadow-xl hover:ring-1 ring-slate-300 hover:scale-105  cursor-pointer w-full sm:w-auto mb-3"
      onClick={() => setOpen(meal.idMeal)}
    >
      <MealCard meal={meal} />
    </div>
  );
};

export default Meals;
