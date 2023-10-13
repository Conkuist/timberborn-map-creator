export class Position {

    constructor(x = 0.0, y = 0.0, z = 0.0) {

        this.X = x.toFixed(1);
        this.Y = y.toFixed(1);
        this.Z = z.toFixed(1);
    }
}