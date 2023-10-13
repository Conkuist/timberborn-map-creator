import { Position } from "./Position.js";
import { Rotation } from "./Rotation.js";

export class CurrentConfiguration {

    constructor() {

        this.Position = new Position(0,0,0);
        this.Rotation = new Rotation(0,0,0,0);
        this.ShadowDistance = 150.0.toFixed(1);
    }
}