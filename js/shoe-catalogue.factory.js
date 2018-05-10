function ShoeCatalogue(storedData, storedTrolley) {
    var shoe_colour = '';
    var shoe_brand = '';
    var shoe_size = '';
    var shoe_price = '';
    var shoe_qty = 0;
    var trolley = [];
    var shoeMap = storedData || [];

    function getBrand(value) {
        if (value !== undefined)
            shoe_brand = value;
        return shoe_brand;
    }

    function getSize(value) {
        if (value !== undefined)
            shoe_size = value;
        return shoe_size;
    }

    function getQty(value) {
        if (value !== undefined)
            shoe_qty = value;
        return shoe_qty;
    }

    function getColour(value) {
        if (value !== undefined)
            shoe_colour = value;
        return shoe_colour;
    }

    function addNew(brand, color, size, price, qty) {
        shoe_brand = brand;
        shoe_colour= color;
        shoe_size = size;
        shoe_price = price;
        shoe_qty = qty;
       
        // add to map
        shoeMap.push({
            'brand':shoe_brand,
            'colour': shoe_colour,
            'size': shoe_size,
            'price': shoe_price,
            'qty': shoe_qty
        });
    }

    function getShoeMap() {
        return shoeMap;
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
        map: getShoeMap
    };
}
