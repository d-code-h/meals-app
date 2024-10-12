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
    strInstructions,
  },
}: {
  meal: MealType;
}) => {
  const { open, meals, favorites, handleFavorites } = useContext(
    MealsContext
  ) as MealsContextType;

  console.log(meals);

  return (
    <section
      key={idMeal}
      className="transition-all duration-500  bg-white rounded-md "
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        width={200}
        height={200}
        className="w-full h-72 lg:h-96 rounded-md"
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
        <div className="flex gap-3 flex-wrap justify-center w-[300px] mx-auto">
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

        {open && (
          <div
            className="mt-3 bg-slate-100 rounded-md p-2 whitespace-pre-wrap
          h-[calc(100vh-70vh)] overflow-y-auto
          "
          >
            {strInstructions.split('\r\n\r\n').map((each) => (
              <>
                {each.split('\r\n').length === 2 ? (
                  each
                    .split('\r\n')
                    .map((e, i) => (
                      <span className=" whitespace-pre-wrap">
                        {i === 0 ? (
                          <h4 className="font-semibold">{e}</h4>
                        ) : (
                          <p className="text-sm">{e}</p>
                        )}
                      </span>
                    ))
                ) : (
                  <p className="text-sm">
                    {each} <br />
                  </p>
                )}
                <br />
              </>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MealCard;
