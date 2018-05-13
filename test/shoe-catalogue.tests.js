describe ('Test results for the Shoe Catalogue application', function (){
    describe('Tests the brand name input function', function(){
        let catalogue = ShoeCatalogue();
        it('Should return true if the passed value is a valid brand name', function() {
            assert.equal(catalogue.brand('Lacoste'), 'Lacoste');
        });
        it('Should return false if the passed value is not a valid brand name', function() {
            assert.notEqual(catalogue.brand(''), '');
        });
        it('Should return pre-stored brand name if no value is provided', function() {
            assert.deepEqual(catalogue.brand(), 'Lacoste');
        });
    });
    describe('Tests the shoe size input function', function(){
        let catalogue = ShoeCatalogue();
        it('Should return true if the passed value is a valid shoe size', function() {
            assert.equal(catalogue.size(6), 6);
        });
        it('Should return false if the passed value is not a valid shoe size', function() {
            assert.notEqual(catalogue.size('four'), 4);
        });
        it('Should return pre-stored shoe size if no value is provided', function() {
            assert.deepEqual(catalogue.size(), 6);
        });
    });
    describe('Tests the shoe colour input function', function(){
        let catalogue = ShoeCatalogue();
        it('Should return true if the passed value is a valid shoe colour', function() {
            assert.equal(catalogue.colour('Black'), 'Black');
        });
        it('Should return false if the passed value is not a valid shoe colour', function() {
            assert.notEqual(catalogue.colour('White'), '#fff');
        });
        it('Should return pre-stored shoe colour if no value is provided', function() {
            assert.deepEqual(catalogue.colour(), 'White');
        });
    });
    describe('Tests the shoe quantity input function', function(){
        let catalogue = ShoeCatalogue();
        it('Should return true if the passed value is a valid shoe quantity', function() {
            assert.equal(catalogue.qty(12), 12);
        });
        it('Should return false if the passed value is not a valid shoe quantity', function() {
            assert.notEqual(catalogue.qty(23), 32);
        });
        it('Should return pre-stored shoe quantity if no value is provided', function() {
            assert.deepEqual(catalogue.qty(), 23);
        });
    });
});