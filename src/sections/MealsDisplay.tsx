import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType } from '../lib/types';

import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import clsx from 'clsx';

const MealsDisplay = () => {
  const { meals, favorites, handleFavorites, search } = useContext(
    MealsContext
  ) as MealsContextType;

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
                <section
                  key={idMeal}
                  className="flex flex-col gap-3 my-3 pb-1 justify-center bg-white rounded-md"
                >
                  <img
                    src={strMealThumb}
                    alt={strMeal}
                    width={300}
                    height={300}
                    className="w-full h-[400px] sm:h-[300px] md:auto rounded-md"
                  />
                  <div className="p-3">
                    <div className="flex justify-between mb-4">
                      <h4 className="text-xl font-semibold">{strMeal}</h4>
                      <button
                        type="button"
                        onClick={() => handleFavorites(idMeal)}
                      >
                        {favorites.includes(idMeal) ? (
                          <MdOutlineFavorite className="fill-red-500" />
                        ) : (
                          <MdOutlineFavoriteBorder className="fill-blue-500" />
                        )}
                      </button>
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center w-[300px] mx-auto">
                      <small className="bg-red-200 px-2 py-1 rounded-md">
                        {strIngredient1}
                      </small>
                      <small className="bg-green-200 px-2 py-1 rounded-md">
                        {strIngredient2}
                      </small>
                      <small className="bg-yellow-200 px-2 py-1 rounded-md">
                        {strIngredient3}
                      </small>
                    </div>
                  </div>
                </section>
              )
            )}
        </div>
      )}
    </div>
  );
};

export default MealsDisplay;
