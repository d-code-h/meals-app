import { useContext, useEffect, useState } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType, MealType } from '../lib/types';
import clsx from 'clsx';
import { FaTrash } from 'react-icons/fa';

const Favorites = () => {
  const { favorites, meals, handleFavorites } = useContext(
    MealsContext
  ) as MealsContextType;
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 2) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  if (favorites.length > 0) {
    return (
      <div
        className={clsx(
          'bg-blue-100 py-8 sticky top-0',
          isScroll ? 'bg-opacity-50' : 'bg-opacity-80'
        )}
      >
        <section className="w-1/3 mx-auto">
          {/* {!isScroll && (
            <h2 className="text-2xl font-semibold mb-2">Favorites</h2>
          )} */}
          <div className="flex gap-5 justify-center text-center">
            {meals
              .filter((meal: MealType) => favorites.includes(meal.idMeal))
              .map((meal) => (
                <div key={meal.idMeal} className="group relative">
                  <div className="text-center flex gap-2 flex-col relative">
                    <div className="hidden group-hover:flex rounded-full w-50 h-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -inset-10 bg-red-200 bg-opacity-70 z-10 justify-center items-center font-bold">
                      <h4>{meal.strMeal}</h4>
                    </div>
                    <div className="p-2 w-22 h-22 rounded-full bg-red-50">
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        width={30}
                        height={30}
                        className="rounded-full w-24 h-24"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleFavorites(meal.idMeal)}
                    type="button"
                    className="mt-2 hidden group-hover:block mx-auto absolute right-3 bottom-3 z-40"
                  >
                    <small>
                      <FaTrash className="fill-red-500" />
                    </small>
                  </button>
                </div>
              ))}
          </div>
        </section>
      </div>
    );
  }
};

export default Favorites;
