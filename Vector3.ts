

class Vector3{

    private c: Array<number> = [0,0,0];

    public constructor(x: number = 0, y: number = 0, z:number = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /*
     GETTERS / SETTERS
     */

    public get x(): number {
        return this.c[0];
    }

    public get y(): number{
        return this.c[1];
    }

    public get z(): number{
        return this.c[2];
    }

    public set x(x: number){
        this.c[0] = x;
    }

    public set y(y: number){
        this.c[1] = y;
    }

    public set z(z: number){
        this.c[2] = z;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number{
        return this.y;
    }

    public getZ(): number{
        return this.z;
    }

    public get(i: number): number{
        return this.c[i];
    }

    public getCoordinates(): Array<number>{
        return this.c;
    }

    public setX(x: number): Vector3 {
        this.x = x;
        return this;
    }

    public setY(y: number): Vector3 {
        this.y = y;
        return this;
    }

    public setZ(z: number): Vector3 {
        this.z = z;
        return this;
    }

    public set(x: number, y: number, z: number): Vector3{
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /*
     OPERATIONS ON VECTOR
     */

    public add(v: Vector3): Vector3;
    public add(x: number, y: number, z: number): Vector3;
    add(){
        if(arguments[0] instanceof Vector3){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    }

    public subtract(v: Vector3): Vector3;
    public subtract(x: number, y: number, z: number): Vector3;
    subtract(){
        if(arguments[0] instanceof Vector3){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    }

    public multiply(v: Vector3): Vector3;
    public multiply(x: number, y: number, z: number): Vector3;
    multiply(){
        if(arguments[0] instanceof Vector3){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    }

    public divide(v: Vector3): Vector3;
    public divide(x: number, y: number, z: number): Vector3;
    divide(){
        if(arguments[0] instanceof Vector3){
            this.x += arguments[0].x;
            this.y += arguments[0].y;
            this.z += arguments[0].z;
        }else{
            this.x += arguments[0];
            this.y += arguments[1];
            this.z += arguments[2];
        }
        return this;
    }

    public scale(n: number): Vector3 {
        this.x *= n;
        this.y *= n;
        this.z *= n;
        return this;
    }

    public negate(): Vector3 {
        return this.scale(-1);
    }

    public normalize(): Vector3 {
        var length = this.getLength();

        if(length===0)
            return this.set(0,0,0);

        return this.scale(1.0/length);
    }

    /*
     ADDITIONAL FUNCTIONS
     */

    public getLength(): number {
        return Math.sqrt(this.getSquaredLength());
    }

    public getSquaredLength(): number {
        return this.x*this.x + this.y*this.y + this.z*this.z;
    }

    public copy(): Vector3{
        return new Vector3(this.x, this.y, this.z);
    }

    public equals(v: Vector3): boolean{
        return v.x==this.x && v.y==this.y && v.z==this.z;
    }

    public toString(): string{
        return "["+this.x+", "+this.y+", "+this.z+"]";
    }

    /*
     STATIC FUNCTIONS
     */

    public static dot(v1: Vector3, v2: Vector3): number {
        return (v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
    }

    public static cross(v1: Vector3, v2: Vector3): Vector3{
        var x = v1.y*v2.z - v1.z*v2.y;
        var y = v1.z*v2.x - v1.x*v2.z;
        var z = v1.x*v2.y - v1.y*v2.x;
        return new Vector3(x,y,z);
    }

    public static distance(v1: Vector3, v2: Vector3): number{
        var x = v2.x - v1.x;
        var y = v2.y - v1.y;
        var z = v2.z - v1.z;
        return Math.sqrt(x*x + y*y + z*z);
    }

    /*
     STATIC VARIABLES
     */

    public static get ZERO(){
        return new Vector3(0,0);
    }

    public static get ONE(){
        return new Vector3(1,1,1);
    }

    public static get RIGHT(){
        return new Vector3(1,0,0);
    }

    public static get LEFT(){
        return new Vector3(-1,0,0);
    }

    public static get UP(){
        return new Vector3(0,1,0);
    }

    public static get DOWN(){
        return new Vector3(0,-1,0);
    }

    public static get FORWARD(){
        return new Vector3(0,0,1);
    }

    public static get BACK(){
        return new Vector3(0,0,-1);
    }
}
