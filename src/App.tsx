import "./App.css";
import ButtonIndex from "./components/ButtonIndex";
import About from "./components/About";
import Products from "./components/Products";

function App() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <div className='App'>
      <p>Welcome</p>
      <ButtonIndex />
      <ButtonIndex />

      <About />
      <Products />
    </div>
  );
}

export default App;
