Date.prototype.toTimestamp = function () {
    return  this.toISOString().split(".")[0].replace("T", " ");
}

export class World {

    constructor () {

        this.GameVersion = "0.5.0.2-d3e4ac7-xsw";
        this.Timestamp = new Date().toTimestamp();
        this.Singletons = {};
        this.Entities = [];
    }

    addEntity(e) {

        this.Entities.push(e);
    }

}