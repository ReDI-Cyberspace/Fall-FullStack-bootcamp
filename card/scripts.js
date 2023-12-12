const herbs = [
    {
        name:"Mint",
        image:"../card/images/3.jpg",
        description:" Kraut",
        packaging:"1",
        weight: "1",
        best_before_date:"2024-05-10",
        price: 5.87
    },
    {
        name:"Lavender",
        image:"../card/images/11.jpg",
        description:"Kraut",
        packaging:"2",
        weight: "1",
        best_before_date:"2024-10-21",
        price: 6.00
    },
    {
        name:"Rosemary",
        image:"../card/images/6.jpg",
        description:"Kraut",
        packaging:"3",
        weight: "1",
        best_before_date:"2024-09-30",
        price: 8.27
    },
    {
        name:"Parsley",
        image:"../card/images/9.jpg",
        description:"Kraut ",
        packaging:"4",
        weight: "1",
        best_before_date:"2025-10-10",
        price: 5.00
    },
    {
        name:"Basil",
        image:"../card/images/8.jpg",
        description:"Kraut",
        packaging:"5",
        weight: "1",
        best_before_date:"2025-05-10",
        price: 15.50
    },
    {
        name:"Camomile",
        image:"../card/images/1.jpg",
        description:"Kraut",
        packaging:"6",
        weight: "1",
        best_before_date:"2026-10-10",
        price: 5.00
    },
    {
        name:"Dill",
        image:"../card/images/17.jpg",
        description:"Kraut",
        packaging:"",
        weight: "1",
        best_before_date:"2026-04-22",
        price: 20.87
    },
    {
        name:"Cloves",
        image:"../card/images/14.jpg",
        description:"Kraut",
        packaging:"8",
        weight: "1",
        best_before_date:"2025-10-20",
        price: 3.87
    },
    {
        name:"Turmeric",
        image:"../card/images/18.jpg",
        description:"Kraut",
        packaging:"9",
        weight: "1",
        best_before_date:"2026-07-11",
        price: 3.87
    },
    {
        name:"Garlic",
        image:"../card/images/14.jpg",
        description:"Kraut",
        packaging:"10",
        weight: "1",
        best_before_date:"2024-10-10",
        price: 3.87
    }
  ];
  
  
  //--------------------------------------jQuery--------------------------------------
  
  /* 
  // render Herbs Array
   $("#herbals").on("click",()=>{
    $(".herbs").html("");
    render(herbs);
    //renderTable(herbs);
    drowTable(herbs);
  });      
  //Sort Herbs Array by Name 
   $("#sort-name").on("click",()=>{
    $(".herbs").html("");
    const sortHerbs = [...herbs].sort((a,b)=>a.name.localeCompare(b.name));
    render(sortHerbs);
    //renderTable(sortHerbs);
    drowTable(sortHerbs);
  }); 
  
  // Sort Herbs Array by Price
   $("#herbals-price").on("click",()=>{
    $(".herbs").html("");
    const sortHerbs = [...herbs].sort((a,b)=>a.price - b.price);
    render(sortHerbs);
    //renderTable(sortHerbs); 
    drowTable(sortHerbs);
  }); 
  // Reload the Page
   $("#reset").on("click",()=>{
    $(".herbs").html("");
    $("#products-table").html("");
  });   
  
  //render Array with jQuery / Render Herbs- Cards List
  const render = (array) => {
          document.getElementsByClassName("herbs").innerHTML="";
            for (const item of array) {
                $(".herbs").append(
                    $("<div>")
                        .addClass("col-md-6 col-lg-3 d-flex align-items-center justify-content-center mb-5")
                        .append(
                          $("<div>")
                          .addClass("card product-card h-100 d-flex justify-content-center")
                          .append(
                            $("<img>")
                                .attr("src", item.image)
                                .attr("width", 240)
                                .attr("height", 180)
                                .addClass("card-img-top"),
                            $("<div>").addClass("card-body")
                              .append(
                                $("<h2>").addClass("card-title").text(item.name),
                                $("<p>").addClass("card-price").text("Price: € " + item.price.toFixed(2)),
                                $("<p>").text("Best before: " + item.best_before_date),
                                  $("<div>").addClass("cardbtn d-flex justify-content-center")
                                    .append( $("<button>").addClass("btn btn-primary").text("Add to Cart"))
                             
  
                              )
                          )
                        )
                  );
            }
        };
   */
  // Function to sort herbals  based on the provided property
  /* function sortHerbals(property) {
            const sortedHerbals = [...herbs].sort((a, b) => a[property].localCmpare(b[property]));
            $(document).ready(function () {
            render(sortedHerbals);
  
        });
   } */
  //------------------------------------------------------JavaScript------------------------------------
  
    // EventListener / Table and products reder with JavaScript
    document.getElementById("herbals").addEventListener("click", function () {
    createProductCards(herbs);
    drowTable(herbs);
    //renderTable(herbs);
  }); 
  
  // EventListener / Product-List and Products-Table rendering with JavaScript
    document.getElementById("sort-name").addEventListener("click", function () {
    const sortHerbs = [...herbs].sort((a,b)=>a.name.localeCompare(b.name));
    createProductCards(sortHerbs);
    drowTable(sortHerbs);
    //renderTable(sortHerbs);
  });
  
  
  // EventListener / Product-List and Products-Table rendering with JavaScript
  document.getElementById("herbals-price").addEventListener("click", function () {
    const sortHerbs = [...herbs].sort((a,b)=>a.price - b.price);
    createProductCards(sortHerbs);
    drowTable(sortHerbs);
   //renderTable(sortHerbs);
  }); 
  
  //Leer Table und Cards Lists
  document.getElementById("reset").addEventListener("click", function () {
    const resetTable = document.getElementById("products-table");
    const resetCards = document.querySelector('.herbs');
    resetTable.innerHTML="";
    resetCards.innerHTML="";
  }); 
  
  // EventListener / Product-List and Products-Table rendering with JavaScript
  document.getElementById("best-before").addEventListener("click", function () {
      let fromDate = "2023-01-01";
      let toDate = "2025-12-31";
  
  const filteredData = (data, key, startDate, endDate) => {     
       startDate = new Date(startDate);
       endDate = new Date(endDate);
    
    return data.filter( d => {
      let time = new Date(d[key]);
      return ( startDate < time && time < endDate )
    });
  }
  const sortHerbs = filteredData (herbs,"best_before_date", fromDate, toDate); 
  
  createProductCards(sortHerbs);
  drowTable(sortHerbs);
    //renderTable(sortHerbs);
  });
  
  
  //Render Products Table with JavaScript 
   /* function renderTable(array){
    const productsTable = document.getElementById("products-table");
    productsTable.innerHTML=""; //Clear previos Content
    let i=1;
    let table = `<table class="table table-bordered">`;
        table +=`<thead><tr><th>Nr.</th><th>Herbs Name</th><th>Description</th><th>Price</th><th>Best Before</th></tr></thead>`;
        table +=`<tbody>`;
    array.forEach(item => {
      table+=`<tr><td>${i}</td><td>${item.name}</td><td>${item.description}</td><td>${item.price}</td><td>${item.best_before_date}</td></tr>`;
    i++;
    });
  
    table +=`</tbody></table>`;
    productsTable.innerHTML=table;
  }    */
  
  // Function - Render Table with document.createElement, appendChild
   function drowTable(array){
    //const productsTable = document.getElementById("products-table");
    
          
          const  newTable = document.getElementById("products-table");
          newTable.innerHTML=""; //Clear previos Content
        // Create Table with classes
            const table = document.createElement("table");
                table.className="table";
                table.classList.add("table-bordered");
        //Create table Header
           const thead = document.createElement("thead");
    
            const headerRow = document.createElement("tr");
    
            const col1 = document.createElement("th");
                  col1.textContent=`Nr.`;
            
            const col2 = document.createElement("th");
               let text2 =document.createTextNode("Name");
                col2.appendChild(text2);
            
            const col3 = document.createElement("th");
            let text3 =document.createTextNode("Description");
                col3.appendChild(text3);
    
            const col4 = document.createElement("th");
            let text4 =document.createTextNode("Best Before");
                col4.appendChild(text4);
    
            const col5 = document.createElement("th");
            let text5 =document.createTextNode("Price");
                col5.appendChild(text5);
    
            headerRow.append(col1,col2,col3,col4,col5);
            thead.append(headerRow);
            table.appendChild(thead);
            
            for(let i=0;i < array.length; i++){
              let tbody = document.createElement("tbody");
                let row = document.createElement("tr");
                let cell0 = document.createElement("td");
                    cell0.textContent = i + 1;
                    row.appendChild(cell0);
    
                for (let property in array[i]){
                  if(property === "image" || property === "packaging" || property === "weight"){
                    delete array[i].property;
                  }else{
    
                    let cell = document.createElement("td");
                        cell.textContent = `${array[i][property]}`;
                        row.appendChild(cell);
                     } 
                }
                tbody.append(row);
                table.appendChild(tbody);
            }
            newTable.appendChild(table);        
        } 
   
        
  
   function createProductCards(array) {
      const herbsContainer = document.querySelector('.herbs'); // Das Ziel-Container-Element
  herbsContainer.innerHTML="";
      array.forEach((herb, index) => {
          const card = document.createElement('div');
          card.className = 'col-md-6 col-lg-3 d-flex align-items-center justify-content-center mb-5';
  
          const cardContent = document.createElement('div');
          cardContent.className = 'card product-card h-100 d-flex justify-content-center';
  
          const image = document.createElement('img');
          image.className = 'card-img-top';
          image.src = herb.image; // Pfad zum Bild
  
  const divCard =document.createElement('div');
  divCard.className = 'card-body';
  
          const title = document.createElement('h5');
          title.className = 'card-title';
          title.textContent = herb.name; // Name des Produkts
  
          const best_before_date = document.createElement('p');
          best_before_date.className = 'Best Before';
          best_before_date.textContent = "Best before:"+herb.best_before_date; // Beschreibung des Produkts
  
          const price = document.createElement('p');
          price.className = 'card-price';
          price.textContent = '$' + herb.price.toFixed(2); // Preis des Produkts
  
          const addToCartButton = document.createElement('a');
          addToCartButton.className = 'btn btn-primary';
          addToCartButton.href = '#';
          addToCartButton.textContent = 'Add to Cart';
  
          // Karteninhalt zusammenstellen
          
          divCard.append(title,best_before_date,price,addToCartButton);
          cardContent.append(image, divCard);
          
          card.appendChild(cardContent);
  
          herbsContainer.appendChild(card);
      });
  }  