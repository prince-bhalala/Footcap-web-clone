const offers = [
            "This is made in India ",
            "7 Days Free Exchange 🛍️",
            "Trusted by 2M+ Happy Customers"
];

let index = 0;

function updateOffer() {
    let offerText = document.getElementById("offer-text");
    offerText.innerText = offers[index];
    offerText.style.animation = "none"; 
    void offerText.offsetWidth; 
    offerText.style.animation = "moveLeft 20s linear infinite";
    index = (index + 1) % offers.length;
}
setInterval(updateOffer, 20000);
