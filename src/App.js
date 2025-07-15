import Weather from "./Weather";
import Background from "./Background";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!</h1>
        <Background />
        <Weather />
      </header>
    </div>
  );
}

export default App;
