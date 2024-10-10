import GlobalMealsContext from './context/MealsContext';
import MealsDisplay from './sections/MealsDisplay';

function App() {
  return (
    <main>
      <GlobalMealsContext>
        <MealsDisplay />
      </GlobalMealsContext>
    </main>
  );
}

export default App;
