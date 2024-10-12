import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType } from '../lib/types';

import clsx from 'clsx';
import Meals from '../components/Meals';

const MealsDisplay = () => {
  const { meals, search } = useContext(MealsContext) as MealsContextType;

  const filteredMeals = meals.filter((meal) =>
    Object.values(meal).join('').toLowerCase().includes(search.toLowerCase())
  );

  return (
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
            filteredMeals.map(
              ({
                idMeal,
                strMeal,
                strMealThumb,
                strIngredient1,
                strIngredient2,
                strIngredient3,
              }) => (
                <Meals
                  key={idMeal}
                  idMeal={idMeal}
                  strMeal={strMeal}
                  strMealThumb={strMealThumb}
                  strIngredient={[
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                  ]}
                />
              )
            )}
        </div>
      )}
    </div>
  );
};

export default MealsDisplay;
