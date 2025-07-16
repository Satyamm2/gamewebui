const GameSection = ({ title, items, images }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2 px-2">
      <h2 className="text-white font-bold text-xl">{title}</h2>
      <button className="text-yellow-400 hover:underline text-sm">
        View All
      </button>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 px-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-[2px] bg-gradient-to-br  from-yellow-300 via-yellow-400 to-yellow-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div className="bg-yellow-100 overflow-hidden shadow-md">
            <img
              src={images[index]}
              alt={item}
              className="w-full h-44 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GameSection;
