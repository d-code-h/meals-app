import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { MealsContextType, MealType } from '../lib/types';
import clsx from 'clsx';

const MealCard = ({
  meal: {
    idMeal,
    strMeal,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  },
}: {
  meal: MealType;
}) => {
  const { meals, favorites, handleFavorites } = useContext(
    MealsContext
  ) as MealsContextType;

  console.log(meals);

  return (
    <section
      key={idMeal}
      className="transition-all duration-500 flex flex-col gap-5 pb-1 bg-white rounded-md"
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        width={300}
        height={300}
        className="w-full h-[300px] sm:h-[300px] rounded-md"
      />
      <div className="p-3">
        <div className="flex justify-between mb-4">
          <h4 className="text-xl font-semibold">{strMeal}</h4>
          <button type="button" onClick={(e) => handleFavorites(e, idMeal)}>
            {favorites.includes(idMeal) ? (
              <MdOutlineFavorite className="fill-red-500 size-5" />
            ) : (
              <MdOutlineFavoriteBorder className="fill-blue-500 size-5" />
            )}
          </button>
        </div>
        <div className="flex gap-3 flex-wrap justify-center max-w-[300px] mx-auto">
          {[strIngredient1, strIngredient2, strIngredient3].map(
            (ingredient, index) => (
              <small
                key={ingredient}
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
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MealCard;
