let travelList =[
{   
    id: "seychelles",
    continent: "Africa",
    country: "Seychelles",
    city: "Mahe",
    year: 2018,
    highlights:{
        first: "Mahe",
        second: "La Digue",
        third: "Praslin"
    },
    img: "./images/wedding.jpg",    
},
{
    id: "dubai",
    continent: "Asia",
    country: "UAE",
    city: "Dubai",
    year: 2016,
    highlights:{
        first: "Burj Khalifa",
        second: "Desert Safari",
        third: "Jumeira/ Marina"
    },
    img: "./images/burjkhalifa.jpg",    
},
{
    id: "paris",
    continent: "Europe",
    country: "France",
    city: "Paris",
    year: 2021,
    highlights:{
        first: "Eiffel Tower, Cruise",
        second: "Arc de Triomphe",
        third: "Disneyland"
    },
    img: "./images/eiffel.jpg",
},
{
    id:"amsterdam",
    continent: "Europe",
    country: "Netherland",
    city: "Amsterdam",
    year: 2021,
    highlights:{
        first: "Van Gogh Museum",
        second: "Boat/ cruise tour",
        third: "Coffeeshops"
    },
    img: "./images/amsterdam.jpg",
   },
{
    id:"baku",
    continent: "Asia",
    country: "Azerbaijan,",
    city: "Baku",
    year: 2019,
    highlights:{
        first: "History, culture",
        second: "Atashgah fire temple",
        third: "Gobustan"
    },
    img: "./images/baku2.jpg",
   },
{
    id: "gdynia",
    continent: "Europe",
    country: "Poland,",
    city: "Gdynia",
    year: 2022,
    highlights:{
        first: "Opener festival",
        second: "Cruise trip",
        third: "Boathouse"
    },
    img: "./images/poland3.jpg",
    },
]


function displayTravels(travelArray){
    const travelElement = document.querySelector("#travelCards");
    travelElement.innerHTML = "";

    travelArray.forEach(function(travelItem){
        const travelCard = document.createElement('div');
        travelCard.classList.add("travel-card");
        travelCard.innerHTML =
       `<a href ="blog.html #${travelItem.id}"><img src=${travelItem.img} alt="City, Country" style="width: 218.5px; height: 150px"/></a>
        <div class="content">
          <h2 class="place" >${travelItem.city}, ${travelItem.country}</h2>
          <p class="year">${travelItem.year}</p>
          <ul class="travel-list">
            <li>${travelItem.highlights.first} </li>
            <li>${travelItem.highlights.second} </li>
            <li>${travelItem.highlights.third} </li>         
          </ul>
          <a href="blog.html #${travelItem.id} ">Read More</a>
        </div>`;
        travelElement.appendChild(travelCard);
    })
    
}
// calling function to display travel list
displayTravels(travelList);

// filter by continent-Africa
document.getElementById("africa").addEventListener("click", ()=>{
    const africa = travelList.filter(travels => travels.continent === "Africa")
    displayTravels(africa)
})
// filter by continent-Asia
document.getElementById("asia").addEventListener("click", ()=>{
    const asia = travelList.filter(travels => travels.continent === "Asia")
    displayTravels(asia)
})
// filter by continent-Europe
document.getElementById("europe").addEventListener("click", ()=>{
    const europe = travelList.filter(travels => travels.continent === "Europe")
    displayTravels(europe)
})


// Sort travels by name/year
document.getElementById('sortByName').addEventListener('click', () => {
    const sortedTravels = [...travelList];
    sortedTravels.sort((a, b) => a.country.localeCompare(b.country));
    displayTravels(sortedTravels);
});

document.getElementById('sortByYear').addEventListener('click', () => {
    const sortedTravels = [...travelList];
    sortedTravels.sort((a, b) => a.year - b.year);
    displayTravels(sortedTravels);
});
