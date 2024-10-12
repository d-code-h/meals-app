import { useContext } from 'react';
import MealCard from '../components/MealCard';
import { MealsContextType, MealType } from '../lib/types';
import { MealsContext } from '../context/MealsContext';
import { MdClose } from 'react-icons/md';

const Modal = ({ meal }: { meal: MealType }) => {
  const { setOpen } = useContext(MealsContext) as MealsContextType;

  return (
    <div className="fixed z-50 top-0 h-full w-full bg-black  bg-opacity-30 border flex justify-center items-center overflow-y-scroll">
      <span className="absolute right-10 top-10" onClick={() => setOpen('')}>
        <MdClose className="text-5xl fill-red-500" />
      </span>
      <div className=" bg-white border relative size-4/6">
        <MealCard meal={meal} />
      </div>
    </div>
  );
};

export default Modal;
