describe("a point", function() {
    it("initializes with x and y", function() {
        var p1 = new Point(3,5);
         
        expect(p1.x).toBe(3);
        expect(p1.y).toBe(5);
    });
});