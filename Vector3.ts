

class Vector3{

    private x: number;
    private y: number;
    private z: number;

    public constructor(x: number = 0, y: number = 0, z:number = 0){
        this.x = x;
        this.y = y;
        this.z = z;
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

    public getZ(): number{
        return this.z;
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
        return (v1.getX()*v2.getX() + v1.getY()*v2.getY() + v1.getZ()*v2.getZ());
    }

    public static distance(v1: Vector3, v2: Vector3): number{
        var x = v2.x - v1.x;
        var y = v2.y - v1.y;
        var z = v2.z - v1.z;
        return Math.sqrt(x*x + y*y + z*z);
    }
}
