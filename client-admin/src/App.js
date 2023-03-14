import logo from './logo.svg';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RegisterPage from './pages/RegisterPage';
import ItemFormPage from './pages/ItemFormPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LoginPage />
      <HomePage />
      <CategoryPage />
      <RegisterPage />
      <ItemFormPage />
    </div>
  );
}

export default App;
