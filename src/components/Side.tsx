const Side = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white h-screen flex flex-col items-center justify-center shadow-2xl rounded-lg">
      <div className="bg-white p-8 rounded-lg shadow-lg text-black">
        <h1 className="text-3xl font-bold">Welcome to Our Site!</h1>
        <p className="text-lg mb-6">Explore and discover amazing content.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Side;
