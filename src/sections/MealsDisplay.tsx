import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType, MealType } from '../lib/types';

import clsx from 'clsx';
import Meals from '../components/Meals';
import Modal from './Modal';

const MealsDisplay = () => {
  const { meals, filteredMeals, open } = useContext(
    MealsContext
  ) as MealsContextType;

  return (
    <>
      <div className="bg-slate-50 min-h-svh py-20 relative">
        {meals.length === 0 || filteredMeals.length === 0 ? (
          <p
            className={clsx(
              'text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 mx-auto',
              filteredMeals.length === 0 ? 'text-5xl' : 'text-8xl'
            )}
          >
            {meals.length === 0 ? 'Loading...' : 'No meals for this search'}
          </p>
        ) : (
          <div className="max-sm:w-10/12 mx-auto flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
            {filteredMeals.length > 0 &&
              filteredMeals.map((meal) => (
                <Meals key={meal.idMeal} meal={meal} />
              ))}
          </div>
        )}
      </div>

      {open && (
        <Modal
          meal={filteredMeals.find((meal) => meal.idMeal === open) as MealType}
        />
      )}
    </>
  );
};

export default MealsDisplay;
