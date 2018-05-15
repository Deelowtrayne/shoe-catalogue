
// Buttons
var shoeAdd = document.querySelector('.add-shoe');
var btnBuy = document.querySelector('.buy-btn');
var btnAddItem = document.querySelector('.add-button');
var btnAddSection = document.querySelector('.open-add-section');

// New shoe inputs
var brandElem = document.querySelector('.shoe-brand');
var colourElem = document.querySelector('.shoe-colour');
var sizeElem = document.querySelector('.shoe-size');
var priceElem = document.querySelector('.shoe-price');
var qtyElem = document.querySelector('.shoe-qty');

// selects / filter
var brandSelect = document.querySelector('.brand-select');
var colourSelect = document.querySelector('.colour-select');
var sizeSelect = document.querySelector('.size-select');

// template setup
let templateSource = document.querySelector('.shoes-template').innerHTML;
const SHOE_TEMPLATE = Handlebars.compile(templateSource);

var displayElem = document.querySelector('.list-display');

// get stored data
var storedShoes = localStorage.getItem('AVAILABLE_SHOES') ? JSON.parse(localStorage.getItem('AVAILABLE_SHOES')) : [];
// instance
var shoes = ShoeCatalogue(storedShoes);

function filterEvent() {
    let params = {};

    if (brandSelect.value !== '') {
        params.brand = brandSelect.value;
    }
    
    if (colourSelect.value !== '') {
        params.colour = colourSelect.value;
    }

    if (sizeSelect.value !== '') {
        params.size = sizeSelect.value;
    }

    //shoes.filterBy(params);
    displayElem.innerHTML = SHOE_TEMPLATE({context:shoes.filterBy(params)})
}

function searchString(elem) {
    shoes.toCart(elem.id);
    console.log(shoes.cart());
    
}
window.addEventListener('DOMContentLoaded', function(){
    displayElem.innerHTML = SHOE_TEMPLATE({context:shoes.map()});
})

btnAddSection.addEventListener('click', function(){
    shoeAdd.classList.toggle('show');
})

btnAddItem.addEventListener('click', function() {
    shoes.new(
        brandElem.value,
        colourElem.value,
        sizeElem.value,
        priceElem.value,
        qtyElem.value
    );
    localStorage.setItem('AVAILABLE_SHOES', JSON.stringify(shoes.map()));
});

brandSelect.addEventListener('change', filterEvent);
colourSelect.addEventListener('change', filterEvent); 
sizeSelect.addEventListener('change', filterEvent);
