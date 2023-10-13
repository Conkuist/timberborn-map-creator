import { MoistureLevels } from "./Maps/MoistureLevels.js";

export class SoilMoistureSimulator {

    constructor(x, y) {

        this.MoistureLevels = new MoistureLevels(x, y);
    }
}