import { WaterDepths } from "./Maps/WaterDepths.js";
import { Outflows } from "./Maps/Outflows.js";

export class WaterMap {

    constructor(x, y) {

        this.WaterDepths = new WaterDepths(x, y);
        this.Outflows = new Outflows(x, y);
    }
}