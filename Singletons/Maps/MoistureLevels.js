import { Map } from "./Map.js";

export class MoistureLevels extends Map {

    constructor(x, y, value = 16) {

        // value between 0 and 16

        super(x, y, value);
    }
}