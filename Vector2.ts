

class Vector2{

    private x: number;
    private y: number;

    public constructor(x: number = 0, y: number = 0){
        this.x = x;
        this.y = y;
    }

    /*
        GETTERS / SETTERS
     */

    public getX(): number {
        return this.x;
    }

    public getY(): number{
        return this.y;
    }

    public setX(x: number): Vector2 {
        this.x = x;
        return this;
    }

    public setY(y: number): Vector2 {
        this.y = y;
        return this;
    }

    public set(x: number, y: number): Vector2{
        this.x = x;
        this.y = y;
        return this;
    }

    /*
        OPERATIONS ON VECTOR
     */

    public add(v: Vector2): Vector2;
    public add(x: number, y: number): Vector2;
    add(){
        if(arguments[0] instanceof Vector2){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    }

    public subtract(v: Vector2): Vector2;
    public subtract(x: number, y: number): Vector2;
    subtract(){
        if(arguments[0] instanceof Vector2){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    }

    public multiply(v: Vector2): Vector2;
    public multiply(x: number, y: number): Vector2;
    multiply(){
        if(arguments[0] instanceof Vector2){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    }

    public divide(v: Vector2): Vector2;
    public divide(x: number, y: number): Vector2;
    divide(){
        if(arguments[0] instanceof Vector2){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
        }
        return this;
    }

    public scale(n: number): Vector2 {
        this.x *= n;
        this.y *= n;
        return this;
    }

    public negate(): Vector2 {
        return this.scale(-1);
    }

    public normalize(): Vector2 {
        var length = this.getLength();

        if(length===0)
            return this.set(0,0);

        return this.scale(1.0/length);
    }

    /*
        ADDITIONAL FUNCTIONS
     */

    public getLength(): number {
        return Math.sqrt(this.getSquaredLength());
    }

    public getSquaredLength(): number {
        return this.x*this.x + this.y*this.y;
    }

    public copy(): Vector2{
        return new Vector2(this.x, this.y);
    }

    public equals(v: Vector2): boolean{
        return v.x==this.x && v.y==this.y;
    }

    public toString(): string{
        return "["+this.x+", "+this.y+"]";
    }

    /*
        STATIC FUNCTIONS
     */

    public static dot(v1: Vector2, v2: Vector2): number {
        return (v1.getX()*v2.getX() + v1.getY()*v2.getY());
    }

    public static cross(v1: Vector2, v2: Vector2): number{
        return (v1.x*v2.y - v1.y*v2.x);
    }

    public static distance(v1: Vector2, v2: Vector2): number{
        var x = v2.x - v1.x;
        var y = v2.y - v1.y;
        return Math.sqrt(x*x + y*y);
    }

    /*
        STATIC VARIABLES
     */

    public static get ZERO(){
        return new Vector2(0,0);
    }

    public static get ONE(){
        return new Vector2(1,1);
    }

    public static get RIGHT(){
        return new Vector2(1,0);
    }

    public static get LEFT(){
        return new Vector2(-1,0);
    }

    public static get UP(){
        return new Vector2(0,1);
    }

    public static get DOWN(){
        return new Vector2(0,-1);
    }
}