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
          'bg-blue-100 py-0 sticky top-0 z-10',
          isScroll ? 'bg-opacity-50' : 'bg-opacity-80'
        )}
      >
        <section className="w-full mx-auto overflow-auto">
          {/* {!isScroll && (
            <h2 className="text-2xl font-semibold mb-2">Favorites</h2>
          )} */}
          <div className="flex py-3 md:p-5 gap-0 md:gap-5 justify-center text-center overflow-auto first-of-type:pl-12">
            {meals
              .filter((meal: MealType) => favorites.includes(meal.idMeal))
              .map((meal) => (
                <div key={meal.idMeal} className="group relative">
                  <div className="text-center gap-2 flex-col relative">
                    <div className="hidden group-hover:flex rounded-full w-16 h-16 md:w-20 md:h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -inset-10 bg-red-200 bg-opacity-70 z-10 justify-center items-center font-bold">
                      <h4 className="text-sm md:text-md ">{meal.strMeal}</h4>
                    </div>
                    <div className="p-2 rounded-full bg-red- w-20 h-20 md:w-24 md:h-24">
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        width={30}
                        height={30}
                        className="rounded-full w-full h-full"
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
