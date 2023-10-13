import { Map } from "./Map.js";

export class Heights extends Map {

    constructor(x, y, height = 8) {

        // height between 0 and 16

        super(x, y, height);
    }
}