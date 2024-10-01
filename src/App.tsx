const App = () => {
  const item = 10;
  console.log("App ~ item:", item);
  return (
    <div className="p-5 text-xl">
      <button className="text-white bg-blue-500 rounded-lg book-now">
        Book Now
      </button>
      <div className="item">
        <div className="button">
          <button className="text-white bg-blue-500 rounded-lg book-now">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
