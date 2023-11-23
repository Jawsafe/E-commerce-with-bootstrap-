// Selecting product images - product-details.html
var mainImage = document.getElementById('main-image');
var smallImages = document.getElementsByClassName('small-img');

smallImages[0].onclick = function () {
    mainImage.src = this.src;
}

smallImages[1].onclick = function () {
    mainImage.src = this.src;
}

smallImages[2].onclick = function () {
    mainImage.src = this.src;
}

smallImages[3].onclick = function () {
    mainImage.src = this.src;
}

// // Finding total - shop-cart.html
// document.addEventListener('DOMContentLoaded', function () {
//     for (let i = 1; i <= 4; i++) {
//         const priceElement = document.getElementById(`price${i}`);
//         const quantityElement = document.getElementById(`quantity${i}`);
//         const totalElement = document.getElementById(`total${i}`);
        
//         quantityElement.addEventListener('input', updateTotal);

//         updateTotal();

//         function updateTotal() {
//             // Get the price and quantity values
//             const price = parseFloat(priceElement.innerText.replace('₱', ''));
//             const quantity = parseInt(quantityElement.value);

//             // Calculate the total
//             const total = price * quantity;

//             // Display the total
//             totalElement.innerText = `₱${total.toFixed(2)}`;
//         }
//     }
// });