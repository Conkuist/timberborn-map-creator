import { Entity } from "./Entity.js";
import { WaterSourceComponent } from "./Components/WaterSource.js";
import { BlockObject } from "./Components/BlockObject.js";

export class WaterSource extends Entity {

    constructor(x, y, z, specified_strength, current_strength) {

        super("WaterSource");
        this.Components.WaterSource = new WaterSourceComponent(specified_strength, current_strength);
        this.Components.BlockObject = new BlockObject(x, y, z);
    }
}
