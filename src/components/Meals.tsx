import { useContext } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { MealsContext } from '../context/MealsContext';
import clsx from 'clsx';
import { MealsContextType } from '../lib/types';

const Meals = ({
  idMeal,
  strMeal,
  strMealThumb,
  strIngredient,
}: {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strIngredient: string[];
}) => {
  const { favorites, handleFavorites } = useContext(
    MealsContext
  ) as MealsContextType;

  return (
    <section
      key={idMeal}
      className="transition-all duration-500 flex flex-col gap-3 my-3 pb-1  h-fitjustify-center bg-white rounded-md hover:shadow-xl hover:ring-1 ring-slate-300 hover:scale-105  cursor-pointer"
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
          <button type="button" onClick={() => handleFavorites(idMeal)}>
            {favorites.includes(idMeal) ? (
              <MdOutlineFavorite className="fill-red-500" />
            ) : (
              <MdOutlineFavoriteBorder className="fill-blue-500" />
            )}
          </button>
        </div>
        <div className="flex gap-3 flex-wrap justify-center w-[300px] mx-auto">
          {strIngredient.map((ingredient, index) => (
            <small
              className={clsx(
                'px-2 py-1 rounded-md',
                index === 1
                  ? 'bg-red-200'
                  : index === 2
                  ? 'bg-green-200'
                  : 'bg-yellow-200'
              )}
            >
              {ingredient}
            </small>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meals;
