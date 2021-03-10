import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/tindercards/Cards";
import SwipeButtons from "./components/swipebuttons/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;
