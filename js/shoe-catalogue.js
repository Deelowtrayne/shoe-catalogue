function ShoeCatalogue(storedData, storedTrolley) {

    var trolley = [];
    var availableShoes = [];

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
                    price: price,
                    qty: qty
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

    function getAvailableShoes() {
        return availableShoes;
    }

    function getTrolley(){
        return trolley;
    }

    function displayShoes() {
        if (availableShoes.length > 1) {
            return "<h1>Nothing to display</h1>";
        }

        for (shoe in availableShoes) {
            trolley.push(shoe);
        }
    }

    return {
        new: addNew,
        display: displayShoes,
        map: getAvailableShoes,
        filterBy: filterFunc,
        toCart: addtoCart,
        cart: getTrolley
    };
}


