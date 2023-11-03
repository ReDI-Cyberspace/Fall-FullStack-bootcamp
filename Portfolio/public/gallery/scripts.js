const products = [
    { id: 1, size: "S", color: "Black", type: "T-shirt" },
    { id: 2, size: "M", color: "Black", type: "T-shirt" },
    { id: 3, size: "L", color: "Black", type: "T-shirt" },
    { id: 4, size: "XL", color: "Black", type: "T-shirt" },
    { id: 5, size: "S", color: "Blue", type: "T-shirt" },
    { id: 6, size: "M", color: "Blue", type: "T-shirt" },
    { id: 7, size: "L", color: "Blue", type: "T-shirt" },
    { id: 8, size: "XL", color: "Blue", type: "T-shirt" },
    { id: 9, size: "S", color: "Red", type: "T-shirt" },
    { id: 10, size: "M", color: "Red", type: "T-shirt" },
    { id: 11, size: "L", color: "Red", type: "T-shirt" },
    { id: 12, size: "XL", color: "Red", type: "T-shirt" },
    { id: 13, size: "S", color: "Olive", type: "T-shirt" },
    { id: 14, size: "M", color: "Olive", type: "T-shirt" },
    { id: 15, size: "L", color: "Olive", type: "T-shirt" },
    { id: 16, size: "XL", color: "Olive", type: "T-shirt" },
];

// Implement your filtering function. Your function should take one
// argument/parameter which tells it what to filter by, so you can re-use the same
// function for all buttons.

console.log(products.size);

function filterProducts(propertyName, propertyValue) {
    return products.filter((item) => item[propertyName] === propertyValue);
}

// Arrow fn
let productsFiltered = (propertyName, propertyValue) => {
    products.filter((item) => item[propertyName] === propertyValue);
};

console.log(filterProducts("color", "Olive"));

// Implement your sorting function. Array.toSorted()

let productsSorted = (propertyName) => {
    if (propertyName === "color") {
        return products.toSorted((a, b) => a.color.localeCompare(b.color));
    } else if (propertyName === "size") {
        const sizeOrder = ["S", "M", "L", "XL"];
        const compareBySize = (a, b) => {
            const sizeA = sizeOrder.indexOf(a.size);
            const sizeB = sizeOrder.indexOf(b.size);

            return sizeA - sizeB;
        };
        return products.toSorted(compareBySize);
    }
};

console.log(productsSorted("color"));

// 2. Loop through your array to create the content of your page. For each item in
// the list:
// a. Create an element
// b. Attach any properties or attributes you wish to it
// c. Append any child elements you desire (make sure to create them first!)
// d. Set the text content!

let mapCreateTable = (arr) => {
    const table = document.getElementById("product-table-body");

    let rows = arr.map(
        (elem) => `
        <tr>
          <td>${product.id}</td>
          <td>${product.size}</td>
          <td>${product.color}</td>
          <td>${product.type}</td>
        </tr>
      `
    );

    table.innerHTML = rows.join("");
};

console.log("Table Map", mapCreateTable());

//  Add some buttons at the top to filter your items, for example, to show only
// dogs or cats.
// 4. Add some buttons at the top to sort your items, for example by age, or by name
// (alphabetically).
