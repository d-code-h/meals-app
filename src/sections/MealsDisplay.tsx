import { useContext } from 'react';
import { MealsContext } from '../context/MealsContext';
import { MealsContextType } from '../lib/types';

const MealsDisplay = () => {
  const { meals } = useContext(MealsContext) as MealsContextType;

  return (
    <section>
      <h1>Meals Display</h1>
      <p>{meals[0].id}</p>
      <p>{meals[0].name}</p>
    </section>
  );
};

export default MealsDisplay;
