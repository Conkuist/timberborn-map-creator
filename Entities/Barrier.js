import { Entity } from "./Entity.js";
import { BlockObject } from "./Components/BlockObject.js";

export class Barrier extends Entity {

    constructor(X, Y, Z, Orientation) {

        super("Barrier");
        this.Components.BlockObject = new BlockObject(X, Y, Z, Orientation);
    }
}
