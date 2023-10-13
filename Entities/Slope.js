import { Entity } from "./Entity.js";
import { BlockObject } from "./Components/BlockObject.js";
import { Constructible } from "./Components/Constructible.js";
import { ConstructionSite } from "./Components/ConstructionSite.js";

export class Slope extends Entity {

    constructor(x, y, z, finished, time) {

        super("Slope");
        this.Components.BlockObject = new BlockObject(x, y, z);
        this.Components.Constructible = new Constructible(finished);
        this.Components.ConstructionSite = new ConstructionSite(time)
    }
}
