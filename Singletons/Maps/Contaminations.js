import { Map } from "./Map.js";

export class Contaminations extends Map {

    constructor(x, y, value = 0) {

        // value between 0 and 1

        super(x, y, value);
    }
}