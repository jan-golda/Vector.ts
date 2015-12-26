var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    /*
        GETTERS / SETTERS
     */
    Vector2.prototype.getX = function () {
        return this.x;
    };
    Vector2.prototype.getY = function () {
        return this.y;
    };
    Vector2.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    Vector2.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    Vector2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.add = function () {
        if (arguments[0] instanceof Vector2) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    };
    Vector2.prototype.subtract = function () {
        if (arguments[0] instanceof Vector2) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    };
    Vector2.prototype.multiply = function () {
        if (arguments[0] instanceof Vector2) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    };
    Vector2.prototype.divide = function () {
        if (arguments[0] instanceof Vector2) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    };
    Vector2.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    Vector2.prototype.negate = function () {
        return this.scale(-1);
    };
    Vector2.prototype.normalize = function () {
        var length = this.getLength();
        if (length === 0)
            return this.set(0, 0);
        return this.scale(1.0 / length);
    };
    /*
        ADDITIONAL FUNCTIONS
     */
    Vector2.prototype.getLength = function () {
        return Math.sqrt(this.getSquaredLength());
    };
    Vector2.prototype.getSquaredLength = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vector2.prototype.copy = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.equals = function (v) {
        return v.x == this.x && v.y == this.y;
    };
    Vector2.prototype.toString = function () {
        return "[" + this.x + ", " + this.y + "]";
    };
    /*
        STATIC FUNCTIONS
     */
    Vector2.dot = function (v1, v2) {
        return (v1.getX() * v2.getX() + v1.getY() * v2.getY());
    };
    Vector2.distance = function (v1, v2) {
        var x = v2.x - v1.x;
        var y = v2.y - v1.y;
        return Math.sqrt(x * x + y * y);
    };
    return Vector2;
})();
//# sourceMappingURL=Vector2.js.map