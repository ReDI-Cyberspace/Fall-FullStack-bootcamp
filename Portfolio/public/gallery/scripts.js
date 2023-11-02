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

// Arrow fn🧮
let productsFiltered = (propertyName, propertyValue) => {
    products.filter((item) => item[propertyName] === propertyValue);
};

console.log(filterProducts("color", "Olive"));

// Implement your sorting function. Array.toSorted()
function sortProducts(propertyName) {
    if (propertyName === products.color) {
        // Use the localeCompare function to sort by color
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
}

console.log(sortProducts("size"));
console.log("products[1].size", products[0].size);
