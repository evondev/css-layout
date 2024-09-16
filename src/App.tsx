const App = () => {
  return (
    <div className="p-10">
      <div className="py-5 navigation" aria-label="navigation">
        <div className="flex items-center justify-between mx-auto l-container">
          <div className="logo">
            <div className="logo-image"></div>
            <div className="logo-text">logo</div>
          </div>
          <ul className="flex items-center menu gap-x-14">
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <div>Login</div>
            <a
              href="/"
              className="px-5 py-4 text-sm font-medium text-white bg-black rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div>Email address</div>
        <div>Get started</div>
      </div>
      <div className="flex items-center mt-5 border border-gray-200 rounded-full max-w-[464px] justify-between p-2 gap-2 form">
        <input
          className="w-full pl-5 outline-none"
          placeholder="Enter Zip Coad"
        ></input>
        <button
          type="button"
          className="flex items-center flex-shrink-0 gap-3 p-2 text-base font-medium text-white bg-blue-500 rounded-full"
        >
          <div className="pl-3">Discover</div>
          <div className="flex items-center justify-center text-blue-500 bg-white rounded-full size-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
