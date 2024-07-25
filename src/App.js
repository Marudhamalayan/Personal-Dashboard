import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import QuickLinks from './components/QuickLinks';
import ThemeToggleButton from './components/ThemeToggleButton';
import useStore from './store';

function App() {
  const { theme } = useStore(); //read theme from store

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <div className="min-h-screen flex flex-col">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Personal Dashboard</h1>
          <div className="flex items-center space-x-4">
            <QuickLinks /> 
            <ThemeToggleButton /> 
          </div>
        </header>
        <main className="flex-grow">
          <MainContent /> 
        </main>
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
