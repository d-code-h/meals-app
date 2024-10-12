import { useContext } from 'react';
import ModalCard from '../components/ModalCard';
import { MealsContextType, MealType } from '../lib/types';
import { MealsContext } from '../context/MealsContext';
import { MdClose } from 'react-icons/md';

const Modal = ({ meal }: { meal: MealType }) => {
  const { setOpen } = useContext(MealsContext) as MealsContextType;

  return (
    <div className="fixed z-50 top-0 h-full w-full bg-black  bg-opacity-30 border flex justify-center items-center overflow-y-scroll">
      <div
        className=" bg-white rounded-md
      w-11/12 h-22 sm:w-4/6 md:w-3/6 xl:w-2/6 relative
      "
      >
        <button
          type="button"
          className="absolute right-0 top-0 bg-slate-200 rounded-full"
          onClick={() => setOpen('')}
        >
          <MdClose className="text-3xl fill-red-500" />
        </button>
        <ModalCard meal={meal} />
      </div>
    </div>
  );
};

export default Modal;
