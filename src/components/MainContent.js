const MainContent = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    // display welcome message and date
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
      <p className="mt-2">Today's date is {currentDate}</p>
    </div>
  );
};

export default MainContent;
