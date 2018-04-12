describe('Angular Mobile UI Demo App', function() {
    beforeEach(function() {
        browser.driver.get('http://mobileangularui.com/demo/#/touch');
    });

    it('should load correct url', function() {
        expect(browser.getCurrentUrl()).toEqual('http://mobileangularui.com/demo/#/touch');
    });
});