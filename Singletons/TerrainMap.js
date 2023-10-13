import { Heights } from "./Maps/Heights.js";

export class TerrainMap {

    constructor(x, y) {

        this.Heights = new Heights(x, y);
    }
}