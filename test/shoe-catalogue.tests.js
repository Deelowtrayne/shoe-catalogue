describe ('Test results for the Shoe Catalogue application', function (){
    // Filter test
    describe('Tests the Add Shoe function', function(){
        
        it('Should add and return an array with 1 shoe objects', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899, 12);
            
            assert.deepEqual(catalogue.map(), [
                // Adidas
                {id:1, brand: "Adidas", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:2, brand: "Adidas", colour: "White", price: 349.00, size: 6, qty: 12},
                {id:3, brand: "Adidas", colour: "Blue", price: 549.00, size: 7, qty: 12},
                // Nike
                {id:4, brand: "Nike", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:5, brand: "Nike", colour: "White", price: 349.00, size: 6, qty: 12},
                {id:6, brand: "Nike", colour: "Blue", price: 549.00, size: 7, qty: 12},
                // Reebok
                {id:7, brand: "Reebok", colour: "Black", price: 499.00, size: 4, qty: 12},
                {id:8, brand: "Reebok", colour: "White", price: 399.00, size: 5, qty: 12},
                {id:9, brand: "Reebok", colour: "Blue", price: 599.00, size: 7, qty: 12},
                // New Shoe
                {id: 10, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.00, qty: 12}
            ]);
        });
        it('Should add and return an array with 2 shoe objects', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.new('John Drakes', 'Black', 7, 1029.90, 17);
            assert.deepEqual(catalogue.map(), [
                // Adidas
                {id:1, brand: "Adidas", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:2, brand: "Adidas", colour: "White", price: 349.00, size: 6, qty: 12},
                {id:3, brand: "Adidas", colour: "Blue", price: 549.00, size: 7, qty: 12},
                // Nike
                {id:4, brand: "Nike", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:5, brand: "Nike", colour: "White", price: 349.00, size: 6, qty: 12},
                {id:6, brand: "Nike", colour: "Blue", price: 549.00, size: 7, qty: 12},
                // Reebok
                {id:7, brand: "Reebok", colour: "Black", price: 499.00, size: 4, qty: 12},
                {id:8, brand: "Reebok", colour: "White", price: 399.00, size: 5, qty: 12},
                {id:9, brand: "Reebok", colour: "Blue", price: 599.00, size: 7, qty: 12},
                // New Shoes
                {id: 10, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 12},
                {id: 11, brand: 'John Drakes', colour: 'Black', size: 7, price: 1029.90, qty: 17}
            ]);
        });
        it('Should increment the quantity and return an array with 1 shoe object', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 10);
            assert.deepEqual(catalogue.map(), [
                // Adidas
                {id:1, brand: "Adidas", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:2, brand: "Adidas", colour: "White", price: 349.00, size: 6, qty: 12},
                {id:3, brand: "Adidas", colour: "Blue", price: 549.00, size: 7, qty: 12},
                // Nike
                {id:4, brand: "Nike", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:5, brand: "Nike", colour: "White", price: 349.00, size: 6, qty: 12},
                {id:6, brand: "Nike", colour: "Blue", price: 549.00, size: 7, qty: 12},
                // Reebok
                {id:7, brand: "Reebok", colour: "Black", price: 499.00, size: 4, qty: 12},
                {id:8, brand: "Reebok", colour: "White", price: 399.00, size: 5, qty: 12},
                {id:9, brand: "Reebok", colour: "Blue", price: 599.00, size: 7, qty: 12},
                // New shoe
                {id: 10, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 22}
            ]);
        });
    });
    // Filter test
    describe('Tests the Filter function', function(){
        
        it('Should return an array with 3 shoe objects with brand (Adidas)', function() {
            let catalogue = ShoeCatalogue();
            let params = {brand: 'Adidas'};

            assert.deepEqual(catalogue.filterBy(params), [
                {id:1, brand: "Adidas", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:2, brand: "Adidas", colour: "White", price: 349.00, size: 6, qty: 12},
                {id:3, brand: "Adidas", colour: "Blue", price: 549.00, size: 7, qty: 12},
            ]);
        });
        it('Should return an array with 2 shoe objects with price (449.00)', function() {
            let catalogue = ShoeCatalogue();
            let params = {price: 449.00};

            assert.deepEqual(catalogue.filterBy(params), [
                {id:1, brand: "Adidas", colour: "Black", price: 449.00, size: 4, qty: 12},
                {id:4, brand: "Nike", colour: "Black", price: 449.00, size: 4, qty: 12},
            ]);
        });
        it('Should return an array with 2 shoe objects with size (5)', function() {
            let catalogue = ShoeCatalogue();
            let params = {size: 5};

            assert.deepEqual(catalogue.filterBy(params), [
                {id:8, brand: "Reebok", colour: "White", price: 399.00, size: 5, qty: 12},
            ]);
        });
        it('Should return an array with 2 shoe objects with brand (Reebok) and size (5)', function() {
            let catalogue = ShoeCatalogue();
            let params = {brand: 'Reebok', size: 5};

            assert.deepEqual(catalogue.filterBy(params), [
                {id:8, brand: "Reebok", colour: "White", price: 399.00, size: 5, qty: 12},
            ]);
        });
    });

    // Shopping Cart Tests
    describe('Tests the Shopping Cart function', function(){
        
        it('Should add 1 item and return an array (trolley) with 1 shoe object with qty (1)', function() {
            let catalogue = ShoeCatalogue();
            catalogue.toCart(1);
            assert.deepEqual(catalogue.cart(), [
                // Adidas
                {id:1, brand: "Adidas", colour: "Black", price: 449.00, size: 4, qty: 1}
            ]);
        });
        
        it('Should add two times return an array (trolley) with 2 shoe objects with qty (1)', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.new('John Drakes', 'Black', 7, 1029.90, 17);
            catalogue.toCart(10);
            catalogue.toCart(11);
            assert.deepEqual(catalogue.cart(), [
                {id: 10, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 1},
                {id: 11, brand: 'John Drakes', colour: 'Black', size: 7, price: 1029.90, qty: 1}
            ]);
        });
        
        it('Should add same item twice return an array (trolley) with 1 shoe object with qty (2)', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.toCart(10);
            catalogue.toCart(10);
            assert.deepEqual(catalogue.cart(), [
                {id: 10, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 2}
            ]);
        });
        
        it('Should add same item twice, clear cart and return an empty array (trolley)', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.toCart(10);
            catalogue.toCart(10);
            assert.deepEqual(catalogue.cart(), [
                {id: 10, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 2}
            ]);
            catalogue.cancel();
            assert.deepEqual(catalogue.cart(), []);
        });
    });
    
});