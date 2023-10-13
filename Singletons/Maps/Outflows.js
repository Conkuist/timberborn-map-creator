import { Map } from "./Map.js";

export class Outflows extends Map {

    constructor(x, y, value = "0:0:0:0") {

        // value between 0:0:0:0 and ?:?:?:?

        super(x, y, value);
    }
}