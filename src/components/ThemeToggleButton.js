import useStore from '../store';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useStore(); // Utilize Zustand store to read and toggle theme

  return (
    //button to toggle the theme
    <button
      onClick={toggleTheme}
      className="p-2 m-2 bg-gray-300 dark:bg-gray-700 rounded"
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggleButton;
