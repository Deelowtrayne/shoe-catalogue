function ShoeCatalogue(storedData, storedTrolley) {

    var trolley = [];
    var shoeMap = [];

    if (storedData) {
        for (let i = 0; i < storedData.length; i++) {
            shoeMap.push(storedData[i]);
        }
    }

    function addNew(brand, color, size, price, qty) {
        let exists = false;

        if (brand !== '' && color !== '' && size !== '' && price !== '' && qty !== '') {
            shoeMap.map(current => {
                if (current.brand === brand && current.colour === color && current.size === size && current.price === price) {
                    current.qty = parseFloat(current.qty) + parseFloat(qty);
                    exists = true;
                } 
            })
            // add to map if it doesnt exist
            if (!exists) {
                let id = shoeMap.length +1;
                shoeMap.push({
                    id: id,
                    brand: brand,
                    colour: color,
                    size: size,
                    price: price,
                    qty: qty
                })
            }
        }
    }

    function filterFunc(search_params) {
        console.log(_.filter(shoeMap, search_params));

        return _.filter(shoeMap, search_params);
        //return shoeMap.filter(shoe => shoe.search_params);
    }
    function addtoCart(id) {
         let found = shoeMap.find(shoe => (shoe.id == id));
         trolley.push(found);
    }

    function getShoeMap() {
        return shoeMap;
    }

    function getTrolley(){
        return trolley;
    }

    function displayShoes() {
        if (shoeMap.length > 1) {
            return "<h1>Nothing to display</h1>";
        }

        for (shoe in shoeMap) {
            trolley.push(shoe);
        }
    }

    return {
        new: addNew,
        display: displayShoes,
        map: getShoeMap,
        filterBy: filterFunc,
        toCart: addtoCart,
        cart: getTrolley
    };
}


