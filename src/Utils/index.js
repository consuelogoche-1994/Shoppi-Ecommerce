/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    const sum = products.reduce((acc, product) => acc + product.price, 0);
    return sum;
};