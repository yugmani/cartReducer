import "./App.css";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

//items

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {/* <h1>Cart using useReducer</h1> */}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
