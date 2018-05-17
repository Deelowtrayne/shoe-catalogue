function ShoeCatalogue(storedData, storedTrolley) {

    var trolley = [];
    var availableShoes = [];
    var trolleyTotal = 0;
    if (storedData) {
        for (let i = 0; i < storedData.length; i++) {
            availableShoes.push(storedData[i]);
        }
    }

    if (storedTrolley) {
        for (let i = 0; i < storedTrolley.length; i++) {
            trolley.push(storedTrolley[i]);
        }
    }

    function addNew(brand, color, size, price, qty) {
        let exists = false;

        if (brand !== '' && color !== '' && size !== '' && price !== '' && qty !== '') {
            availableShoes.map(current => {
                if (current.brand === brand && current.colour === color && current.size === size && current.price === price) {
                    current.qty = parseFloat(current.qty) + parseFloat(qty);
                    exists = true;
                } 
            })
            // add to map if it doesnt exist
            if (!exists) {
                let id = availableShoes.length +1;
                availableShoes.push({
                    id: id,
                    brand: brand,
                    colour: color,
                    size: size,
                    price: parseFloat(price).toFixed(2),
                    qty: parseFloat(qty)
                });
            }
        }
    }

    function filterFunc(search_params) {
        return _.filter(availableShoes, search_params);
    }

    function addtoCart(id) {
        // check if it exists in the trolley (update if it does) or (add if it doesn't)
        let exists = false;

        trolley.map(current => {
            if (current.id == id) {
                current.qty += 1;
                exists = true;
            }
        })

        if (!exists){
            let updateItem = availableShoes.find(shoe => (shoe.id == id));
            
            trolley.push({
                id: id,
                brand: updateItem.brand,
                colour: updateItem.colour,
                size: updateItem.size,
                price: updateItem.price,
                qty: 1
            });
        }

        // update the shoe map
        availableShoes.map(current => {
            if (current.id == id) { 
                current.qty = current.qty - 1;
            } 
        })
    }

    function clearTrolley() {
        for (let i = 0; i < availableShoes.length; i++) {
            // temp vars
            let current = availableShoes[i];
            let trolleyMatch = trolley.find(shoe => (shoe.id == current.id));
            // replace product
            if (trolleyMatch) {
                current.qty += trolleyMatch.qty;
            }
        }
        trolleyTotal = 0.00;
        trolley = [];
    }

    function getCartTotal() { 
        let subTotal = 0;
        if(trolley.length > 0) {
            subTotal = trolley.reduce((total, current) => (total + (current.price * current.qty)), 0);
        }
        return (trolleyTotal + subTotal).toFixed(2);
    }

    function getAvailableShoes() {
        return availableShoes;
    }

    function getTrolley(){
        return trolley;
    }

    return {
        new: addNew,
        map: getAvailableShoes,
        filterBy: filterFunc,
        toCart: addtoCart,
        cart: getTrolley,
        cartTotal: getCartTotal,
        cancel: clearTrolley
    };
}


