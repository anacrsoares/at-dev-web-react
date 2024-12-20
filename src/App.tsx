import "./App.scss";
import Routes from "./routes";
import AppProvider from "./Context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
