import { useState } from "react";
import Data from "./Data.json";
import SearchByName from "./SearchByName";

// Ref. https://www.youtube.com/watch?v=pQndRHoHd4Y
function Filters() {
  console.log(Data);
  const [pets, setPets] = useState(Data);

  const filteredResults = (petType) => {
    if (petType !== "") {
      const filteredPets = pets.filter((pet) => {
        return pet.type === petType;
      });
      setPets(filteredPets);
    } else {
      setPets(Data);
    }
  };

  return (
    <div className="centerBox">
      <button id="sort-by-name">
        <SearchByName />
      </button>
      <div className="buttons">
        <button id="filter-cats" onClick={() => filteredResults("cat")}>
          Filter Cats
        </button>
        <button id="filter-dogs" onClick={() => filteredResults("dog")}>
          Filter Dogs
        </button>
        <button id="filter-turtles" onClick={() => filteredResults("turtle")}>
          Filter Turtles
        </button>
        <button id="filter-rabbits" onClick={() => filteredResults("rabbit")}>
          Filter Rabbits
        </button>
        <button id="reset" onClick={() => filteredResults("")}>
          Reset
        </button>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </div>
    </div>
  );
}

export default Filters;
