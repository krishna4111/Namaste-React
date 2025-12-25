import ItemList from "./ItemList";

const RestaurantCategory = ({ data, show, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* { Accordion header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 font-bold text-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* {Accordion Body} */}
        {show && <ItemList cardItems={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
