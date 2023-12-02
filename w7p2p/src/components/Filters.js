import Data from "./Data.json";

function Filters() {
  console.log(Data);
  return (
    <div className="centerBox">
      <div className="buttons">
        <button id="filter-cats">Filter Cats</button>
        <button id="filter-dogs">Filter Dogs</button>
        <button id="filter-turtles">Filter Turtles</button>
        <button id="filter-rabbits">Filter Rabbits</button>
        <button id="sort-by-name">Sort by Name</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}

export default Filters;
