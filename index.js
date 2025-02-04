let cart = [];

const addProduct = (productName, price, quantity) => {
    cart.push({ productName, price, quantity });
}

const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

const removeProduct = (productName) => {
    cart = cart.filter(product => product.productName !== productName);
};

const logProductDetails = () => {
    cart.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: ${price}, Quantity: ${quantity}`);
    });
};

addProduct("Laptop", 1000, 1);
addProduct("Mouse", 50, 2);
addProduct("Keyboard", 80, 1);

console.log("Total Cost:", calculateTotal());
removeProduct("Mouse");
logProductDetails();
