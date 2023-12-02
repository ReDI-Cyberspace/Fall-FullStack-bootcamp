import Data from "./Data.json";
import SearchByName from "./SearchByName";

// Ref. https://www.youtube.com/watch?v=pQndRHoHd4Y
function Filters() {
  console.log(Data);
  return (
    <div className="centerBox">
      <div className="buttons">
        {/* <button id="filter-cats" onClick={() => filteredResults("cat")}>
          Filter Cats
        </button>
        <button id="filter-dogs" onClick={filteredResults("dog")}>
          Filter Dogs
        </button>
        <button id="filter-turtles" onClick={filteredResults("turtle")}>
          Filter Turtles
        </button>
        <button id="filter-rabbits" onClick={filteredResults("rabbits")}>
          Filter Rabbits
        </button> */}
        <button id="sort-by-name">
          <SearchByName />
        </button>
        <button id="reset" type="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Filters;
