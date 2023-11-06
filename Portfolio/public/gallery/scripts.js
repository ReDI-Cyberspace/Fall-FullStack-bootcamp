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
    { id: 17, size: "S", color: "Black", type: "Hoodie" },
    { id: 18, size: "M", color: "Black", type: "Hoodie" },
    { id: 19, size: "L", color: "Black", type: "Hoodie" },
    { id: 20, size: "XL", color: "Black", type: "Hoodie" },
    { id: 21, size: "S", color: "Blue", type: "Hoodie" },
    { id: 22, size: "M", color: "Blue", type: "Hoodie" },
    { id: 23, size: "L", color: "Blue", type: "Hoodie" },
    { id: 24, size: "XL", color: "Blue", type: "Hoodie" },
    { id: 25, size: "S", color: "Red", type: "Hoodie" },
    { id: 26, size: "M", color: "Red", type: "Hoodie" },
    { id: 27, size: "L", color: "Red", type: "Hoodie" },
    { id: 28, size: "XL", color: "Red", type: "Hoodie" },
    { id: 29, size: "S", color: "Olive", type: "Hoodie" },
    { id: 30, size: "M", color: "Olive", type: "Hoodie" },
    { id: 31, size: "L", color: "Olive", type: "Hoodie" },
    { id: 32, size: "XL", color: "Olive", type: "Hoodie" },
    { id: 36, size: "one-size", color: "Olive", type: "cap" },
    { id: 37, size: "one-size", color: "Olive", type: "cap" },
    { id: 38, size: "one-size", color: "Olive", type: "cap" },
    { id: 39, size: "one-size", color: "Olive", type: "cap" },
    { id: 40, size: "one-size", color: "Black", type: "cap" },
    { id: 41, size: "one-size", color: "Black", type: "cap" },
    { id: 42, size: "one-size", color: "Black", type: "cap" },
    { id: 43, size: "one-size", color: "Black", type: "cap" },
    { id: 44, size: "one-size", color: "Red", type: "cap" },
    { id: 45, size: "one-size", color: "Red", type: "cap" },
    { id: 46, size: "one-size", color: "Red", type: "cap" },
    { id: 47, size: "one-size", color: "Red", type: "cap" },
    { id: 47, size: "one-size", color: "Red", type: "cap" },
];

// Implement your filtering function:
let productsFiltered = (value) => {
    // Check if the value is present in the object
    if (products.some((item) => Object.values(item).includes(`${value}`))) {
        return products.filter((item) =>
            Object.values(item).includes(`${value}`)
        );
    } else {
        console.log(
            "Property or value does not exist. Product does not exist."
        );
        return [];
    }
};

// Implement sorting function with Array.toSorted()
let productsSorted = (property) => {
    if (property === "color") {
        return products.toSorted((a, b) => a.color.localeCompare(b.color));
    } else if (property === "size") {
        const sizeOrder = ["S", "M", "L", "XL"];
        const compareBySize = (a, b) => {
            const sizeA = sizeOrder.indexOf(a.size);
            const sizeB = sizeOrder.indexOf(b.size);

            return sizeA - sizeB;
        };
        return products.toSorted(compareBySize);
    }
};

// 2. Loop through your array to create the content of your page. For each item in
// the list:
// a. Create an element
// b. Attach any properties or attributes you wish to it
// c. Append any child elements you desire (make sure to create them first!)
// d. Set the text content!

let mapTable = (arr) => {
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

console.log("Table Map", mapTable());

//  Add some buttons at the top to filter your items, for example, to show only
// dogs or cats.
// 4. Add some buttons at the top to sort your items, for example by age, or by name
// (alphabetically).

// SIZE
let selectSize = document.getElementById("selectSize");

var sizeOptions = select.getElementsByTagName("option");

for (var i = 0; i < sizeOptions.length; i++) {
    sizeOptions[i].addEventListener("click", function () {
        console.log("Selected option value: " + this.value);
    });
}
