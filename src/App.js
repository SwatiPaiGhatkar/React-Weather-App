import Weather from "./Weather";
import Background from "./Background";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!</h1>
        <Background />
        <Weather />
        <Footer />
      </header>
    </div>
  );
}

export default App;
