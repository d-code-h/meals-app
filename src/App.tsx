import GlobalMealsContext from './context/MealsContext';
import Favorites from './sections/Favorites';
import MealsDisplay from './sections/MealsDisplay';

function App() {
  return (
    <main>
      <GlobalMealsContext>
        <Favorites />
        <MealsDisplay />
      </GlobalMealsContext>
    </main>
  );
}

export default App;
