describe('Namespace', function() {
    it('Provides the "App" object', function() {
       expect(App).to.be.an('object');
       
       expect(App).to.include.keys('Config','Models'); 
    });
    
    if ('Provides the "app" object', function() {
       expect(app).to.be.an('object'); 
    });
})