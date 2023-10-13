import { Entity } from "./Entity.js";
import { BlockObject } from "./Components/BlockObject.js";

export class Barrier extends Entity {

    constructor(x, y, z, orientation) {

        super("Barrier");
        this.Components.BlockObject = new BlockObject(x, y, z, orientation);
    }
}
