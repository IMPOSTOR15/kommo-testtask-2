import './App.css';
import './vendor/normalize.css';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
