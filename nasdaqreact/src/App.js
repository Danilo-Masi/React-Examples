import './App.css';
import Stock from './Stock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Applicazione react</h1>
        <Stock nome = "Apple" fondatore = "Steve Jobs" eta = {11} />
      </header>
    </div>
  );
}

export default App;
