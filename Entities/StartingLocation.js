import { Entity } from "./Entity.js";
import { BlockObject } from "./Components/BlockObject.js";

export class StartingLocation extends Entity{

    constructor(x, y, z) {

        super("StartingLocation");
        this.Components.BlockObject = new BlockObject(x, y, z)
    }
}