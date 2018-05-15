describe ('Test results for the Shoe Catalogue application', function (){
    // Filter test
    describe('Tests the Add Shoe function', function(){
        
        it('Should add and return an array with 1 shoe objects', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            assert.deepEqual(catalogue.map(), [{id: 1, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 12}]);
        });
        it('Should add and return an array with 2 shoe objects', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.new('John Drakes', 'Black', 7, 1029.90, 17);
            assert.deepEqual(catalogue.map(), [
                {id: 1, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 12},
                {id: 2, brand: 'John Drakes', colour: 'Black', size: 7, price: 1029.90, qty: 17}
            ]);
        });
        it('Should increment the quantity and return an array with 1 shoe object', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 10);
            assert.deepEqual(catalogue.map(), [
                {id: 1, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 22}
            ]);
        });
    });
    // Filter test
    // describe('Tests the Add Shoe function', function(){
        
    //     it('Should return an array with 2 shoe objects', function() {
    //         let catalogue = ShoeCatalogue();
    //         //brand, color, size, price, qty
    //         catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
    //         catalogue.new('John Drakes', 'Black', 7, 1029.90, 17);
    //         assert.deepEqual(catalogue.map(), [
    //             {brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 12},
    //             {brand: 'John Drakes', colour: 'Black', size: 7, price: 1029.90, qty: 17}
    //         ]);
    //     });
    // });

    // Filter test
    describe('Tests the Shopping Cart function', function(){
        
        it('Should return an array (trolley) with 1 shoe object', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.new('John Drakes', 'Black', 7, 1029.90, 17);
            catalogue.toCart(1);
            assert.deepEqual(catalogue.cart(), [
                {id: 1, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 1}
            ]);
        });
        
        it('Should return an array (trolley) with 2 shoe object', function() {
            let catalogue = ShoeCatalogue();
            //brand, color, size, price, qty
            catalogue.new('Lacoste', 'Avo-green', 6, 899.90, 12);
            catalogue.new('John Drakes', 'Black', 7, 1029.90, 17);
            catalogue.toCart(1);
            catalogue.toCart(2);
            assert.deepEqual(catalogue.cart(), [
                {id: 1, brand: 'Lacoste', colour: 'Avo-green', size: 6, price: 899.90, qty: 1},
                {id: 2, brand: 'John Drakes', colour: 'Black', size: 7, price: 1029.90, qty: 1}
            ]);
        });
    });
    
});