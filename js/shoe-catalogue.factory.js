function ShoeCatalogue(storedData, storedTrolley) {
    var shoe_colour = '';
    var shoe_brand = '';
    var shoe_size = '';
    var shoe_price = '';
    var shoe_qty = 0;
    var trolley = [];
    var shoeMap = [];

    if (storedData) {
        for (let i = 0; i < storedData.length; i++) {
            shoeMap.push(storedData[i]);
        }
    }

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

    function filterByBrand(passed_brand, passed_color, passed_size) {
        
        if (passed_brand !== undefined) {
            
            if (passed_color !== undefined){

                if (passed_size !== undefined) {
                    console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size}));
                    
                    return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size});
                    
                }
                console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color}));
                
                return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color});
                
            } else if (passed_size !== undefined){

                if (passed_color !== undefined) {
                    console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size}));
                    
                    return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size})
                    
                }
                console.log(_.filter(shoeMap, {'brand':passed_brand, 'size': passed_size}));
                
                return _.filter(shoeMap, {'brand':passed_brand, 'size': passed_size});
                
            }
            console.log(_.filter(shoeMap, {'brand':passed_brand}));
            
            return _.filter(shoeMap, {'brand':passed_brand});
            //result = shoeMap.filter(current => (current.brand==passed_brand));
        }
        //return {};
    }

    function filterByColor (passed_brand, passed_color, passed_size) {
        if (passed_color !== undefined) {
            
            if (passed_brand !== undefined){

                if (passed_size !== undefined) {
                    console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size}));
                    
                    return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size});
                    
                }
                console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color}));
                
                return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color});
                
            } else if (passed_size !== undefined){

                if (passed_brand !== undefined) {
                    console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size}));
                    
                    return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size})
                    
                }
                console.log(_.filter(shoeMap, {'brand':passed_brand, 'size': passed_size}));
                
                return _.filter(shoeMap, {'colour':passed_size, 'size': passed_size});
                
            }
            console.log(_.filter(shoeMap, {'colour':passed_color}));
            
            return _.filter(shoeMap, {'colour':passed_color});
            //result = shoeMap.filter(current => (current.brand==passed_brand));
        }
        //return {};
    }

    function filterBySize (passed_brand, passed_color, passed_size) {
        if (passed_size !== undefined) {
            
            if (passed_brand !== undefined){

                if (passed_color !== undefined) {
                    console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size}));
                    
                    return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size});
                    
                }
                console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color}));
                
                return _.filter(shoeMap, {'brand':passed_brand, 'size': passed_size});
                
            } else if (passed_color !== undefined){

                if (passed_brand !== undefined) {
                    console.log(_.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size}));
                    
                    return _.filter(shoeMap, {'brand':passed_brand, 'colour': passed_color, 'size': passed_size})
                    
                }
                console.log(_.filter(shoeMap, {'brand':passed_brand, 'size': passed_size}));
                
                return _.filter(shoeMap, {'colour':passed_size, 'size': passed_size});
                
            }
            console.log(_.filter(shoeMap, {'colour':passed_color}));
            
            return _.filter(shoeMap, {'size':passed_size});
            //result = shoeMap.filter(current => (current.brand==passed_brand));
        }
        //return {};
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
        map: getShoeMap,
        brandFilter: filterByBrand,
        colorFilter: filterByColor,
        sizeFilter: filterBySize
    };
}


