import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType } from '../lib/types';

const MealsDisplay = () => {
  const { meals } = useContext(MealsContext) as MealsContextType;

  return (
    <div className="bg-slate-50 py-20">
      <div className="max-sm:w-10/12 mx-auto flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
        {meals.map(
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
    </div>
  );
};

export default MealsDisplay;
