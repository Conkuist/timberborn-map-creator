import { Coordinates } from "./BlockObject/Coordinates.js";
import { Orientation } from "./BlockObject/Orientation.js";

export class BlockObject {

    constructor(x, y, z, orientation = null)
    {
        this.Coordinates = new Coordinates(x,y,z)
        if(orientation !== null)
        {
            this.Orientation = new Orientation(orientation)
        }
    }
}
