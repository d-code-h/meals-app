import GlobalMealsContext from './context/MealsContext';
import Favorites from './sections/Favorites';
import MealsDisplay from './sections/MealsDisplay';
import SearchBar from './sections/SearchBar';

function App() {
  return (
    <main>
      <GlobalMealsContext>
        <Favorites />
        <SearchBar />
        <MealsDisplay />
      </GlobalMealsContext>
    </main>
  );
}

export default App;
