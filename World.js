Date.prototype.toTimestamp = function () {
    return  this.toISOString().split(".")[0].replace("T", " ");
}

import { Singletons } from "./Singletons/Singletons.js";

export class World {

    constructor (x = 64, y = 64) {

        this.GameVersion = "0.5.0.2-d3e4ac7-xsw";
        this.Timestamp = new Date().toTimestamp();
        this.Singletons = new Singletons(x,y);
        this.Entities = [];
    }

    addEntity(e) {

        this.Entities.push(e);
    }

}