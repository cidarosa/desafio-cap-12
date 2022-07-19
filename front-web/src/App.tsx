import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import Sales from './components/sales';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div>
          <Sales />
        </div>
      </div>
    </>
  );
}

export default App;
