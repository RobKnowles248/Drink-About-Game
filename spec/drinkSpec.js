describe("Checks age", function() {

    it("should exist", function() {
        expect(whatCanIDrink).toBeDefined();
    });

    it("shouldn't be able to return a drink when called as whatCanIDrink(-5)", function() {
        expect(whatCanIDrink(-5)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });

    it("shouldn't be able to return a drink when called as whatCanIDrink(150)", function() {
        expect(whatCanIDrink(150)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });

    it("should return drink toddy when called as whatCanIDrink(7)", function() {
        expect(whatCanIDrink(7)).toBe("Drink Toddy");
    });

    it("should return drink coke when called as whatCanIDrink(17)", function() {
        expect(whatCanIDrink(17)).toBe("Drink Coke");
    });

    it("should return drink beer when called as whatCanIDrink(20)", function() {
        expect(whatCanIDrink(20)).toBe("Drink Beer");
    });

    it("should return drink whisky when called as whatCanIDrink(54)", function() {
        expect(whatCanIDrink(54)).toBe("Drink Whisky");
    });
})