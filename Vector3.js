var Vector3 = (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /*
     GETTERS / SETTERS
     */
    Vector3.prototype.getX = function () {
        return this.x;
    };
    Vector3.prototype.getY = function () {
        return this.y;
    };
    Vector3.prototype.getZ = function () {
        return this.z;
    };
    Vector3.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    Vector3.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    Vector3.prototype.setZ = function (z) {
        this.z = z;
        return this;
    };
    Vector3.prototype.set = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    };
    Vector3.prototype.add = function () {
        if (arguments[0] instanceof Vector3) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    };
    Vector3.prototype.subtract = function () {
        if (arguments[0] instanceof Vector3) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    };
    Vector3.prototype.multiply = function () {
        if (arguments[0] instanceof Vector3) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    };
    Vector3.prototype.divide = function () {
        if (arguments[0] instanceof Vector3) {
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }
        else {
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    };
    Vector3.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
        return this;
    };
    Vector3.prototype.negate = function () {
        return this.scale(-1);
    };
    Vector3.prototype.normalize = function () {
        var length = this.getLength();
        if (length === 0)
            return this.set(0, 0, 0);
        return this.scale(1.0 / length);
    };
    /*
     ADDITIONAL FUNCTIONS
     */
    Vector3.prototype.getLength = function () {
        return Math.sqrt(this.getSquaredLength());
    };
    Vector3.prototype.getSquaredLength = function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    Vector3.prototype.copy = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    Vector3.prototype.equals = function (v) {
        return v.x == this.x && v.y == this.y && v.z == this.z;
    };
    Vector3.prototype.toString = function () {
        return "[" + this.x + ", " + this.y + ", " + this.z + "]";
    };
    /*
     STATIC FUNCTIONS
     */
    Vector3.dot = function (v1, v2) {
        return (v1.getX() * v2.getX() + v1.getY() * v2.getY() + v1.getZ() * v2.getZ());
    };
    Vector3.distance = function (v1, v2) {
        var x = v2.x - v1.x;
        var y = v2.y - v1.y;
        var z = v2.z - v1.z;
        return Math.sqrt(x * x + y * y + z * z);
    };
    return Vector3;
})();
//# sourceMappingURL=Vector3.js.map